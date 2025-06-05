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
                className={clsx('nav-button', activeTab === 'education' && 'selected')}
                onClick={() => selectTab('education')}
            ><span className="text">Education</span>
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

