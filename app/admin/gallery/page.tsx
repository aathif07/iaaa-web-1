'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  getGalleryImages,
  uploadGalleryImage,
  deleteGalleryImage,
  GalleryImage,
} from '@/lib/api';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, Plus, X } from 'lucide-react';

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    url: '',
    caption: '',
    category: 'General',
  });

  // Fetch images
  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    try {
      setLoading(true);
      const data = await getGalleryImages();
      setImages(data);
    } catch (error) {
      console.error('Failed to fetch gallery images:', error);
    } finally {
      setLoading(false);
    }
  }

  // Handle form submit
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    try {
      await uploadGalleryImage(formData);
      setFormData({ url: '', caption: '', category: 'General' });
      setShowForm(false);
      await fetchImages();
    } catch (error) {
      console.error('Failed to upload image:', error);
    } finally {
      setSubmitting(false);
    }
  }

  // Handle delete
  async function handleDelete(id: string) {
    if (confirm('Are you sure you want to delete this image?')) {
      try {
        await deleteGalleryImage(id);
        await fetchImages();
      } catch (error) {
        console.error('Failed to delete image:', error);
      }
    }
  }

  // Handle cancel
  function handleCancel() {
    setShowForm(false);
    setFormData({ url: '', caption: '', category: 'General' });
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
          <p className="text-gray-600 mt-1">Manage photos and images</p>
        </div>
        <Button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white"
        >
          <Plus size={20} />
          Add Image
        </Button>
      </div>

      {/* Form */}
      {showForm && (
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Upload Image</h2>
            <button onClick={handleCancel} className="p-1 hover:bg-gray-100 rounded">
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL *
              </label>
              <Input
                type="url"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                placeholder="https://example.com/image.jpg"
                required
                disabled={submitting}
              />
              <p className="text-xs text-gray-500 mt-1">
                Use external image URLs or upload to a cloud service
              </p>
            </div>

            {/* Caption */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Caption
              </label>
              <Input
                type="text"
                value={formData.caption}
                onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
                placeholder="Image description"
                disabled={submitting}
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                disabled={submitting}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>General</option>
                <option>Events</option>
                <option>Programs</option>
                <option>Facilities</option>
                <option>Team</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 pt-4">
              <Button
                type="submit"
                disabled={submitting}
                className="bg-blue-500 hover:bg-blue-700 text-white"
              >
                {submitting ? 'Uploading...' : 'Upload'}
              </Button>
              <Button
                type="button"
                onClick={handleCancel}
                disabled={submitting}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Gallery Grid */}
      <div>
        {loading ? (
          <div className="text-center py-8">
            <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-gray-600">Loading gallery...</p>
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <p className="text-gray-600 mb-4">No images in gallery yet</p>
            <Button
              onClick={() => setShowForm(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white"
            >
              <Plus size={20} />
              Add First Image
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <Card key={image._id} className="overflow-hidden hover:shadow-lg transition">
                {/* Image */}
                <div className="relative w-full h-48 bg-gray-100">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 px-2 py-1 bg-black bg-opacity-50 text-white text-xs rounded">
                    {image.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  {image.caption && (
                    <p className="text-sm text-gray-700 mb-2 line-clamp-2">
                      {image.caption}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mb-4">
                    {new Date(image.uploadedAt).toLocaleDateString()}
                  </p>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(image._id)}
                    className="w-full p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded transition flex items-center justify-center gap-2"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
