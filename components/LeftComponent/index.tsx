import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Activity, Command, Database, Globe, LucideIcon, MessageSquare, Settings, Shield, Terminal } from 'lucide-react';
import { Button } from '../ui/button';

const LeftComponent: React.FC = () => {
    return (
        <div className="col-span-12 md:col-span-3 lg:col-span-2 ">
        <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full">
            <CardContent className="p-4">
                <nav className="space-y-2">
                    <NavItem icon={Command} label="Dashboard" active />
                    <NavItem icon={Activity} label="Diagnostics" />
                    <NavItem icon={Database} label="Data Center" />
                    <NavItem icon={Globe} label="Network" />
                    <NavItem icon={Shield} label="Security" />
                    <NavItem icon={Terminal} label="Console" />
                    <NavItem icon={MessageSquare} label="Communications" />
                    <NavItem icon={Settings} label="Settings" />
                </nav>

                <div className="mt-8 pt-6 border-t border-slate-700/50">
                    <div className="text-xs text-slate-500 mb-2 font-mono">SYSTEM STATUS</div>
                </div>
            </CardContent>
        </Card>
    </div>
    );
};

// Component for nav items
function NavItem({ icon: Icon, label, active }: { icon: LucideIcon; label: string; active?: boolean }) {
    return (
        <Button
            variant="ghost"
            className={`w-full justify-start ${active ? "bg-slate-800/70 text-cyan-400" : "text-slate-400 hover:text-slate-100"}`}
        >
            <Icon className="mr-2 h-4 w-4" />
            {label}
        </Button>
    )
}
export default LeftComponent;