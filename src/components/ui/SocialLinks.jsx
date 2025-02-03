const SOCIAL_LINKS = [
    {
        name: 'Twitter',
        icon: 'fa-twitter',
        url: 'https://twitter.com/martinbasile23'
    },
    {
        name: 'GitHub',
        icon: 'fa-github',
        url: 'https://github.com/martinbasile13'
    },
    {
        name: 'LinkedIn',
        icon: 'fa-linkedin',
        url: 'https://www.linkedin.com/in/martin-basile-00271023a/'
    }
];

export function SocialLinks() {
    return (
        <div className="grid grid-flow-col gap-4">
            {SOCIAL_LINKS.map(({ name, icon, url }) => (
                <a 
                    key={name}
                    href={url} 
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className={`fab ${icon} icon btn btn-sm btn-circle`} />
                </a>
            ))}
        </div>
    );
} 