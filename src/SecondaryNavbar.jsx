import clsx from 'clsx'
export default function SecondaryNavbar({ selectTab, activeTab }) {
    return (
        <section className="secondary-navbar">
            <button
                className={clsx('nav-button', activeTab === 'projects' && 'selected')}
                onClick={() => selectTab('projects')}>
                <span className="text">Projects</span>
            </button>
            <button
                className={clsx('nav-button', activeTab === 'skills' && 'selected')}
                onClick={() => selectTab('skills')}>
                <span className="text">Skills</span>
            </button>

            <button
                className={clsx('nav-button', activeTab === 'about' && 'selected')}
                onClick={() => selectTab('about')}><span className="text">About</span></button>
            <button
                className={clsx('nav-button', activeTab === 'contact' && 'selected')}
                onClick={() => selectTab('contact')}><span className="text">Contact</span></button>
        </section >

    )
}

