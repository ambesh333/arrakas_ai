"use client"

import {
    Activity
} from "lucide-react"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"




import ChatSection from "@/components/AIchat/chat-interface/chat"
import RightComponent from "@/components/AIchat/RightComponent"

export default function Dashboard() {
    return (
        <div
            className="flex flex-col "
        >
            <div className="container mx-auto p-1 relative z-10 flex-1 flex max-h-[calc(100vh-5rem)]">
                <div className="grid grid-cols-12 gap-6 flex-1">
                    {/* <LeftComponent /> */}
                    {/* Main dashboard */}
                    <div className="col-span-12 md:col-span-10 lg:col-span-9  max-h-[calc(100vh-6rem)]">
                        <div className="grid ">
                            <Card className="backdrop-blur-sm ">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="text-slate-100 flex items-center">
                                                <Activity className="mr-2 h-5 w-5 text-cyan-500" />
                                                Arrakas AI
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <ChatSection />
                            </Card>
                        </div>
                    </div>
                    {/* Right sidebar */}
                    <RightComponent />
                </div>
            </div>
        </div>
    )
}


