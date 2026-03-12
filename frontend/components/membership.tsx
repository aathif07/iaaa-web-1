'use client';

import { Users, Award, Building2, Check } from 'lucide-react';

const membershipPlans = [
	{
		title: "ANNUAL MEMBERSHIP (PAID)",
		price: "₹1,000",
		period: "/ year",
		icon: Users,
		description: "For aspiring aerospace professionals",
		popular: true,
		features: [
			"₹1,000 / year",
			"4-10 certified courses per year",
			"National contests & internships",
			"Workshops and training programs",
			"Official IAAA Certificate",
			"Career support & guidance",
		],
	},
	{
		title: "ANNUAL MEMBERSHIP (Unpaid Volunteer Based)",
		price: "Free",
		period: "",
		icon: Award,
		description: "For engineers and scientists",
		popular: false,
		features: [
			"Volunteer membership (VIAAA)",
			"Networking opportunities",
			"Student mentorship roles",
			"Industry event access",
			"Research collaboration",
		],
	},
	{
		title: "COLLEGIATE / INDUSTRY ANNUAL CLUB MEMBERSHIP (Minimum 50 to 300 members)",
		price: "Custom",
		period: "pricing",
		icon: Building2,
		description: "Professional development focused partnerships",
		popular: false,
		features: [
			"Host IAAA Collegiate Clubs",
			"Regional Hub opportunities",
			"PTDC Centre hosting",
			"FDP Programs access",
			"Revenue sharing model",
		],
	},
];

export default function MembershipPlans() {
	return (
		<div className="space-y-6">
			{membershipPlans.map((plan, index) => (
				<div
					key={index}
					className={`border rounded-lg p-6 ${
						plan.popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
					}`}
				>
					<div className="flex items-center gap-3 mb-4">
						<div
							className={`w-10 h-10 rounded-lg flex items-center justify-center ${
								plan.popular ? "bg-blue-100" : "bg-gray-100"
							}`}
						>
							<plan.icon
								className={`h-5 w-5 ${
									plan.popular ? "text-blue-600" : "text-gray-600"
								}`}
							/>
						</div>
						<div>
							<h3 className="font-semibold text-gray-900 text-sm leading-tight">
								{plan.title}
							</h3>
							<p className="text-xs text-gray-600">{plan.description}</p>
						</div>
					</div>

					{(plan.price || plan.period) && (
						<div className="flex items-baseline gap-1 mb-4">
							<span className="text-3xl font-bold text-gray-900">{plan.price}</span>
							<span className="text-sm text-gray-600">{plan.period}</span>
						</div>
					)}

					<ul className="space-y-2 mb-5">
						{plan.features.map((feature) => (
							<li
								key={feature}
								className="flex items-center text-sm text-gray-600"
							>
								<Check className="h-4 w-4 mr-2 text-blue-600" />
								{feature}
							</li>
						))}
					</ul>

					<button
						className={`w-full py-2 px-4 rounded-lg font-medium transition ${
							plan.popular
								? 'bg-blue-600 text-white hover:bg-blue-700'
								: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
						}`}
					>
						Choose Plan
					</button>
				</div>
			))}
		</div>
	);
}
