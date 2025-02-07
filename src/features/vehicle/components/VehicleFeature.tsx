import { Settings2, Radio, Lock, SlidersHorizontal } from "lucide-react";

export const iconComponents = {
    settings2: Settings2,
    radio: Radio,
    lock: Lock,
    slidersHorizontal: SlidersHorizontal,
};

type VehicleFeatureProps = {
    icon: keyof typeof iconComponents;
    text: string;
};

export const VehicleFeature = ({icon, text}: VehicleFeatureProps) => {
    const IconComponent = iconComponents[icon];
    return (
        <li className="flex items-center gap-2">
            <IconComponent className="w-5 h-5 text-primary"/>
            <span className="text-muted-foreground">{text}</span>
        </li>
    );
};
