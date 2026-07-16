import { CardSpotlight } from "@/components/ui/aceternity/card-spotlight";

interface ChecklistCardProps {
  title: string;
  items: string[];
}

export default function ChecklistCard({ title, items }: ChecklistCardProps) {
  return (
    <CardSpotlight
      className="h-full"
      color="rgba(78, 205, 196, 0.08)"
      radius={250}
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ocean-600/20">
          <svg className="h-5 w-5 text-ocean-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h4 className="font-display text-xl font-semibold text-white">{title}</h4>
      </div>

      <ul className="space-y-3" role="list">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-silver-300/85">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-ocean-500/30 bg-ocean-600/10">
              <svg className="h-2.5 w-2.5 text-ocean-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>
    </CardSpotlight>
  );
}
