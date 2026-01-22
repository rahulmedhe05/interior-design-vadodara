"use client";

import { BusinessConfig, getAreaDisplayName } from "@/lib/business-config";
import { InteriorDesignerForm } from "./forms/interior-designer-form";

interface BusinessContactFormProps {
  business: BusinessConfig;
  area: string;
  keyword?: string;
}

export function BusinessContactForm({ business, area, keyword }: BusinessContactFormProps) {
  const areaName = getAreaDisplayName(area);
  return <InteriorDesignerForm area={areaName} keyword={keyword} />;
}

