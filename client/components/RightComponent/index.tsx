'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRoiData } from '@/store/ROISlice';
import { fetchArticles } from '@/store/ArticleSlice';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { NewsFeedTable } from '@/components/NewsFeedTable';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { BarChart3, Cpu, LineChart, LucideIcon } from 'lucide-react';
import { AppDispatch, RootState } from '@/store/store';

const RightComponent: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const roiData = useSelector((state: RootState) => state.roi.apiData);
    const newsArticles = useSelector((state: RootState) => state.articles.articles);

    useEffect(() => {
        dispatch(fetchRoiData());
        dispatch(fetchArticles());
    }, [dispatch]);

    return (
        <div className="col-span-12 lg:col-span-3">
            <div className="grid gap-6">
                {/* ROI Carousel */}
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                    <CardHeader className="justify-between border-b border-slate-700/50">
                        <CardTitle className="text-slate-100 text-base">Return On Investment</CardTitle>
                    </CardHeader>
                    <Carousel autoPlayInterval={5000} className="w-full max-w-xs ml-5">
                        <CarouselContent>
                            {roiData.map((coin: { name: string; symbol: string; roi: { [key: string]: number } }) => (
                                <CarouselItem key={coin.symbol}>
                                    <div className="p-1">
                                        <ROICard
                                            name={coin.name}
                                            symbol={coin.symbol}
                                            roi={{
                                                "24h": coin.roi["24h"],
                                                "7d": coin.roi["7d"],
                                                "30d": coin.roi["30d"],
                                                "YTD": coin.roi["YTD"],
                                                "1y": coin.roi["1y"],
                                            }}
                                            icon={Cpu}
                                            color="cyan"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </Card>

                {/* News Feed */}
                <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-slate-100 text-base">News Feed</CardTitle>
                    </CardHeader>
                    <CardContent className="overflow-auto max-w-full">
                        <div className="w-full">
                            <NewsFeedTable articles={newsArticles} />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

function ROICard({
    name,
    symbol,
    roi,
    icon: Icon,
    color,
}: {
    name: string;
    symbol: string;
    roi: {
        '24h': number;
        '7d': number;
        '30d': number;
        YTD: number;
        '1y': number;
    };
    icon: LucideIcon;
    color: string;
}) {
    const trend = roi['24h'] > 0 ? 'up' : roi['24h'] < 0 ? 'down' : 'stable';

    const getColor = () => {
        switch (color) {
            case 'cyan':
                return 'from-cyan-500 to-blue-500 border-cyan-500/30';
            case 'green':
                return 'from-green-500 to-emerald-500 border-green-500/30';
            case 'blue':
                return 'from-blue-500 to-indigo-500 border-blue-500/30';
            case 'purple':
                return 'from-purple-500 to-pink-500 border-purple-500/30';
            default:
                return 'from-cyan-500 to-blue-500 border-cyan-500/30';
        }
    };

    const getTrendIcon = () => {
        switch (trend) {
            case 'up':
                return <BarChart3 className="h-4 w-4 text-emerald-500" />;
            case 'down':
                return <BarChart3 className="h-4 w-4 rotate-180 text-red-500" />;
            case 'stable':
                return <LineChart className="h-4 w-4 text-slate-400" />;
            default:
                return null;
        }
    };

    const formatPercent = (value: number) => `${value.toFixed(2)}%`;

    return (
        <div
            className={`h-60 rounded-lg border ${getColor()} p-4 relative overflow-hidden ${
                roi['24h'] > 0
                    ? 'bg-green-900/50'
                    : roi['24h'] < 0
                    ? 'bg-red-900/50'
                    : 'bg-slate-800/50'
            }`}
        >
            <div className="flex items-center justify-between mb-2">
                <div className="text-md text-white-400 font-semibold">
                    {name} ({symbol})
                </div>
                <Icon className={`h-5 w-5 text-${color}-500`} />
            </div>

            <div className="text-xs text-slate-500 mb-2">ROI Snapshot</div>

            <div className="grid grid-cols-2 gap-2 text-base font-semibold text-slate-300 mb-3">
                <div>
                    24h:{' '}
                    <span className={roi['24h'] < 0 ? 'text-red-400' : 'text-green-400'}>
                        {formatPercent(roi['24h'])}
                    </span>
                </div>
                <div>
                    7d:{' '}
                    <span className={roi['7d'] < 0 ? 'text-red-400' : 'text-green-400'}>
                        {formatPercent(roi['7d'])}
                    </span>
                </div>
                <div>
                    30d:{' '}
                    <span className={roi['30d'] < 0 ? 'text-red-400' : 'text-green-400'}>
                        {formatPercent(roi['30d'])}
                    </span>
                </div>
                <div>
                    YTD:{' '}
                    <span className={roi['YTD'] < 0 ? 'text-red-400' : 'text-green-400'}>
                        {formatPercent(roi['YTD'])}
                    </span>
                </div>
                <div>
                    1y:{' '}
                    <span className={roi['1y'] < 0 ? 'text-red-400' : 'text-green-400'}>
                        {formatPercent(roi['1y'])}
                    </span>
                </div>
            </div>

            <div className="absolute bottom-2 right-2 flex items-center">{getTrendIcon()}</div>
            <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-gradient-to-r opacity-20 blur-xl from-cyan-500 to-blue-500"></div>
        </div>
    );
}

export default RightComponent;
