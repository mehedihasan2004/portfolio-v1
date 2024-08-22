"use client";

import { Tooltip } from "@/components/ui/tooltip";
import { Card, CardBody, Tabs, Tab } from "@nextui-org/react";

export function Skills() {
  return (
    <div className="flex flex-col px-4 border border-green-500 h-[1000px]">
      <div className="flex size-full flex-col  border border-red-400">
        <Tabs
          aria-label="Options"
          isVertical
          className="border border-blue-400"
        >
          <Tab key="photos" title="Photos" className="border">
            <Card className="p-40">
              <CardBody>
                <Tooltip id={1} name="Test" image="/images/logo.png" />
                <Tooltip id={1} name="Test" image="/images/logo.png" />
                <Tooltip id={1} name="Test" image="/images/logo.png" />
                <Tooltip id={1} name="Test" image="/images/logo.png" />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="music" title="Music">
            <Card>
              <CardBody></CardBody>
            </Card>
          </Tab>
          <Tab key="videos" title="Videos">
            <Card>
              <CardBody></CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
