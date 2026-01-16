import { RewardsView } from '@/features/member/components/RewardsView';

export default function RewardsPage() {
    return (
        <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            <h1 className="text-2xl font-heading font-bold text-white uppercase italic mb-6">
                Vital<span className="text-yellow-500">Points</span>
            </h1>
            <RewardsView />
        </div>
    );
}