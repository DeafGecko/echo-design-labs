interface BentoCardProps {
      title: string;
      children: React.ReactNode;
      className?: string;
}

export const BentoCard = ({ title, children, className = "" }: BentoCardProps) => {
      return (
            <div className={`
      relative overflow-hidden rounded-3xl border border-echo-border 
      bg-echo-glass backdrop-blur-md p-6 
      transition-all duration-300 hover:bg-white/10
      ${className}
      `}>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                        {title}
                  </h3>
                  <div className="text-white">
                        {children}
                  </div>
            </div>
      );
};