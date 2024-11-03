import React from "react";
import WorkflowButton from "./_components/workflow-button";
import ModalProvider from "@/providers/modal-provider";
import Workflows from './_components/workflow'

type Props = {};

const WorkFlow = (props: Props) => {
  return (
      <div className="flex flex-col relative">
        <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b justify-between">
          Workflows
          <WorkflowButton />
        </h1>
        <Workflows description="tsttskjasdf;lkasjdfasdf" id="23423412342134" name="TEst ofr fukciosdf" publish key={"asdfasdfsadf"} />
        <Workflows description="tsttskjasdf;lkasjdfasdf" id="23423412342134" name="TEst ofr fukciosdf" publish key={"asdfasdfsadf"} />
        <Workflows description="tsttskjasdf;lkasjdfasdf" id="23423412342134" name="TEst ofr fukciosdf" publish key={"asdfasdfsadf"} />
        <Workflows description="tsttskjasdf;lkasjdfasdf" id="23423412342134" name="TEst ofr fukciosdf" publish key={"asdfasdfsadf"} />
        <Workflows description="tsttskjasdf;lkasjdfasdf" id="23423412342134" name="TEst ofr fukciosdf" publish key={"asdfasdfsadf"} />
        <Workflows description="tsttskjasdf;lkasjdfasdf" id="23423412342134" name="TEst ofr fukciosdf" publish key={"asdfasdfsadf"} />
        <Workflows description="tsttskjasdf;lkasjdfasdf" id="23423412342134" name="TEst ofr fukciosdf" publish key={"asdfasdfsadf"} />
        <Workflows description="tsttskjasdf;lkasjdfasdf" id="23423412342134" name="TEst ofr fukciosdf" publish key={"asdfasdfsadf"} />
      </div>
  );
};

export default WorkFlow;
