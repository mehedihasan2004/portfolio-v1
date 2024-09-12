"use client";

import { Tooltip } from "@/components/ui/tooltip";
import { SKILLS_CATEGORIES } from "@/data/skills";
import { Skill, SkillsCategory } from "@/types/skill";
import { Card, CardBody, Tabs, Tab } from "@nextui-org/react";

export function Skills() {
  return (
    <section id="skills">
      <h4 className="tracking-wider py-2">Skills</h4>

      <Tabs aria-label="Skills" defaultSelectedKey="frontend">
        {SKILLS_CATEGORIES.map(
          ({ key, title: { icon: Icon, label }, skills }: SkillsCategory) => (
            <Tab
              key={key}
              title={
                <div className="flex items-center gap-x-2">
                  <Icon />
                  <span>{label}</span>
                </div>
              }
              className="w-full"
            >
              <Card className="bg-transparent border">
                <CardBody className="flex flex-row flex-wrap gap-4 overflow-hidden justify-center">
                  {skills.map(({ name, image }: Skill, i: number) => (
                    <Tooltip key={i} id={i} name={name} image={image} />
                  ))}
                </CardBody>
              </Card>
            </Tab>
          )
        )}
      </Tabs>
    </section>
  );
}
