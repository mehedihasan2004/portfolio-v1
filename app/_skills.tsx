"use client";

import { Tooltip } from "@/components/ui/tooltip";
import { SKILLS_CATEGORIES } from "@/data/skills";
import { Skill, SkillsCategory } from "@/types/skill";
import { Card, CardBody, Tabs, Tab } from "@nextui-org/react";

export function Skills() {
  return (
    <section
      id="#skills"
      className="relative max-sm:h-[800px] sm:max-md:h-[500px] lg:h-[400px] xl:h-[300px]"
    >
      <h4 className="absolute top-12 tracking-wide">Skills</h4>

      <Tabs
        isVertical
        aria-label="Skills"
        className="pt-20"
        defaultSelectedKey="frontend"
      >
        {SKILLS_CATEGORIES.map(({ key, title, skills }: SkillsCategory) => (
          <Tab key={key} title={title} className="w-full">
            <Card className="bg-transparent">
              <CardBody className="flex flex-row flex-wrap gap-4 overflow-hidden pt-20">
                {skills.map(({ name, image }: Skill, i: number) => (
                  <Tooltip key={i} id={i} name={name} image={image} />
                ))}
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </section>
  );
}
