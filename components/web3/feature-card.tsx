import type { Feature } from "@/lib/types/web3.type";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const FeatureCard: React.FC<Feature> = ({
	title,
	description,
	icon,
	bgColor,
	borderColor,
}) => (
	<Card
		className={`bg-gray-900 border-gray-800 ${borderColor} transition-all duration-300`}
	>
		<CardHeader className="pb-2">
			<div className="flex items-center gap-2">
				<div className={`${bgColor} p-2 rounded-lg`}>{icon}</div>
				<CardTitle className="text-xl text-white">{title}</CardTitle>
			</div>
		</CardHeader>
		<CardContent className="text-gray-400">{description}</CardContent>
	</Card>
);
