import React from 'react';
import { useParams } from 'react-router-dom';
import GuideLayout from './GuideLayout';

const MovingGuide = () => {
    const { type } = useParams(); // 'out' or 'in'
    // In a real app, we might use query params for old/new ward names
    const searchParams = new URLSearchParams(window.location.search);
    const ward = searchParams.get('ward') || 'your ward';

    const isMoveIn = type === 'in';

    const steps = isMoveIn ? [
        {
            title: "1. Submit Moving-in Notification (Tennyu-todoke)",
            description: `Visit the ${ward} City Office (Citizens Affairs Section) within 14 days of moving in.`,
            details: [
                "Deadline: Must be done within 14 days of moving to the new address.",
                "Required Documents:",
                "  - Moving-out Certificate (Tenshutsu-shomeisho) from your old ward.",
                "  - Residence Card (Zairyu Card) for all family members.",
                "  - My Number Card (if you have one).",
                "  - Passport (if moving from overseas).",
                "  - Inkan (Personal Seal) - optional but recommended.",
                "Note: Your Residence Card will be updated with the new address on the back."
            ]
        },
        {
            title: "2. Join National Health Insurance (NHI)",
            description: "Register for NHI at the Insurance & Pension Section.",
            details: [
                "Do this immediately after submitting your Tennyu-todoke.",
                "Required: Passport, Residence Card, and Moving-out Certificate.",
                "You will receive a new NHI card by mail within a week."
            ]
        },
        {
            title: "3. Update My Number Card",
            description: "Update the digital certificate on your My Number Card.",
            details: [
                "This requires your 4-digit PIN.",
                "Essential for printing official documents at convenience stores."
            ]
        }
    ] : [
        {
            title: "1. Submit Moving-out Notification (Tenshutsu-todoke)",
            description: `Visit the ${ward} City Office (Citizens Affairs Section) up to 14 days BEFORE your move.`,
            details: [
                "Deadline: Can be done 14 days before moving. Must be done before registering in the new ward.",
                "Required Documents:",
                "  - Residence Card (Zairyu Card) or Passport.",
                "  - Inkan (Personal Seal).",
                "Output: You will receive a 'Tenshutsu-shomeisho' (Moving-out Certificate).",
                "CRITICAL: You MUST keep this certificate safe. You cannot register in your new ward without it."
            ]
        },
        {
            title: "2. Withdraw from National Health Insurance",
            description: "Return your old NHI card at the Insurance Section.",
            details: [
                "Settle any outstanding premiums.",
                "Your coverage ends on the day you move out."
            ]
        },
        {
            title: "3. Cancel/Transfer Utilities",
            description: "Contact providers at least 1 week in advance.",
            details: [
                "Electricity (TEPCO, etc.): Schedule shut-off.",
                "Gas (Tokyo Gas): Requires in-person presence for shut-off.",
                "Water: Contact the Bureau of Waterworks."
            ]
        },
        {
            title: "4. Mail Forwarding (Tenkyo-todoke)",
            description: "Submit a forwarding request to Japan Post.",
            details: [
                "Can be done online (e-Tenkyo) or at any post office.",
                "Forwards mail for 1 year. Takes 3-7 days to start."
            ]
        }
    ];

    return (
        <GuideLayout
            title={isMoveIn ? `Moving In: ${ward}` : `Moving Out: ${ward}`}
            category="Paperwork"
            readTime="15 min"
            lastUpdated="2024-05-20"
        >
            {steps.map((step, index) => (
                <div key={index} className="guide-section">
                    <h2>{step.title}</h2>
                    <p>{step.description}</p>
                    <ul className="guide-list">
                        {step.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className="guide-section">
                <h2>Helpful Japanese Phrases</h2>
                <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                    These phrases will help you communicate at the ward office:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* Getting Started */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Getting Started</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.75rem' }}>
                            {[
                                { en: 'Excuse me', jp: 'すみません', romaji: 'Sumimasen' },
                                { en: isMoveIn ? 'I would like to submit a moving-in form' : 'I would like to submit a moving-out form', jp: isMoveIn ? '転入届を出したいのですが' : '転出届を出したいのですが', romaji: isMoveIn ? 'Tennyu todoke wo dashitai no desu ga' : 'Tenshutsu todoke wo dashitai no desu ga' },
                                ...(!isMoveIn ? [
                                    { en: "I'm moving out of the city", jp: '市外に引っ越します', romaji: 'Shigai ni hikkoshimasu' },
                                    { en: "I'm leaving Japan", jp: '日本を出国します', romaji: 'Nihon wo shukkoku shimasu' }
                                ] : [])
                            ].map((phrase, i) => (
                                <div key={i} style={{ padding: '0.875rem', background: 'rgba(99, 102, 241, 0.04)', border: '1px solid rgba(99, 102, 241, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                                    <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{phrase.en}</div>
                                    <div style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.15rem' }}>{phrase.jp}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>{phrase.romaji}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Finding the Right Department */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Finding the Right Department</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.75rem' }}>
                            {[
                                { en: "Where is the residents' affairs counter?", jp: '住民課はどこですか？', romaji: 'Jūmin-ka wa doko desu ka?' },
                                { en: 'Which window should I go to?', jp: 'どの窓口に行けばいいですか？', romaji: 'Dono madoguchi ni ikeba ii desu ka?' },
                                { en: 'Can you help me?', jp: '手伝っていただけますか？', romaji: 'Tetsudatte itadakemasu ka?' }
                            ].map((phrase, i) => (
                                <div key={i} style={{ padding: '0.875rem', background: 'rgba(99, 102, 241, 0.04)', border: '1px solid rgba(99, 102, 241, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                                    <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{phrase.en}</div>
                                    <div style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.15rem' }}>{phrase.jp}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>{phrase.romaji}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Submitting Documents */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Submitting Documents</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.75rem' }}>
                            {[
                                { en: 'Here are my documents', jp: '書類です', romaji: 'Shorui desu' },
                                { en: 'I have filled out the form', jp: 'フォームに記入しました', romaji: 'Fōmu ni kinyū shimashita' },
                                { en: 'Is this correct?', jp: 'これで合っていますか？', romaji: 'Kore de atte imasu ka?' },
                                { en: "I don't understand", jp: 'わかりません', romaji: 'Wakarimasen' }
                            ].map((phrase, i) => (
                                <div key={i} style={{ padding: '0.875rem', background: 'rgba(99, 102, 241, 0.04)', border: '1px solid rgba(99, 102, 241, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                                    <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{phrase.en}</div>
                                    <div style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.15rem' }}>{phrase.jp}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>{phrase.romaji}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Common Questions */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Common Questions You Might Be Asked</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.75rem' }}>
                            {[
                                { en: 'What is your new address?', jp: '新しい住所は？', romaji: 'Atarashii jūsho wa?' },
                                { en: 'When are you moving?', jp: 'いつ引っ越しますか？', romaji: 'Itsu hikkoshimasu ka?' },
                                { en: 'Do you have your residence card?', jp: '在留カードはありますか？', romaji: 'Zairyū kādo wa arimasu ka?' },
                                { en: 'Do you have your health insurance card?', jp: '健康保険証はありますか？', romaji: 'Kenkō hoken-shō wa arimasu ka?' }
                            ].map((phrase, i) => (
                                <div key={i} style={{ padding: '0.875rem', background: 'rgba(99, 102, 241, 0.04)', border: '1px solid rgba(99, 102, 241, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                                    <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{phrase.en}</div>
                                    <div style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.15rem' }}>{phrase.jp}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>{phrase.romaji}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* If You Need Help */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>If You Need Help</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.75rem' }}>
                            {[
                                { en: "I don't speak Japanese well", jp: '日本語があまりできません', romaji: 'Nihongo ga amari dekimasen' },
                                { en: 'Could you speak slowly?', jp: 'ゆっくり話してください', romaji: 'Yukkuri hanashite kudasai' },
                                { en: 'Could you write it down?', jp: '書いてもらえますか？', romaji: 'Kaite moraemasu ka?' },
                                { en: 'Is there someone who speaks English?', jp: '英語を話せる人はいますか？', romaji: 'Eigo wo hanaseru hito wa imasu ka?' }
                            ].map((phrase, i) => (
                                <div key={i} style={{ padding: '0.875rem', background: 'rgba(99, 102, 241, 0.04)', border: '1px solid rgba(99, 102, 241, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                                    <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{phrase.en}</div>
                                    <div style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.15rem' }}>{phrase.jp}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>{phrase.romaji}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Document-Related Questions */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Document-Related Questions</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.75rem' }}>
                            {[
                                { en: 'I forgot to bring...', jp: '...を忘れました', romaji: '...wo wasuremashita' },
                                { en: 'Do I need to bring anything else?', jp: '他に持参するものはありますか？', romaji: 'Hoka ni jisan suru mono wa arimasu ka?' },
                                { en: 'Can I submit this by mail?', jp: '郵送で提出できますか？', romaji: 'Yūsō de teishutsu dekimasu ka?' },
                                { en: 'When will I receive the certificate?', jp: '証明書はいつもらえますか？', romaji: 'Shōmei-sho wa itsu moraemasu ka?' }
                            ].map((phrase, i) => (
                                <div key={i} style={{ padding: '0.875rem', background: 'rgba(99, 102, 241, 0.04)', border: '1px solid rgba(99, 102, 241, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                                    <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{phrase.en}</div>
                                    <div style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.15rem' }}>{phrase.jp}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>{phrase.romaji}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* For Proxy Submission */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>For Proxy Submission</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.75rem' }}>
                            {[
                                { en: 'I am submitting on behalf of someone', jp: '代理で提出します', romaji: 'Dairi de teishutsu shimasu' },
                                { en: 'I have a power of attorney', jp: '委任状があります', romaji: 'Ininjō ga arimasu' },
                                { en: 'The person I represent is...', jp: '代理する人は...', romaji: 'Dairi suru hito wa...' }
                            ].map((phrase, i) => (
                                <div key={i} style={{ padding: '0.875rem', background: 'rgba(99, 102, 241, 0.04)', border: '1px solid rgba(99, 102, 241, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                                    <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{phrase.en}</div>
                                    <div style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.15rem' }}>{phrase.jp}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>{phrase.romaji}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key Terms */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Key Terms</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.5rem' }}>
                            {[
                                { en: isMoveIn ? 'Moving-in form' : 'Moving-out form', jp: isMoveIn ? '転入届' : '転出届', romaji: isMoveIn ? 'Tennyu todoke' : 'Tenshutsu todoke' },
                                { en: isMoveIn ? 'Moving-in certificate' : 'Moving-out certificate', jp: isMoveIn ? '転入証明書' : '転出証明書', romaji: isMoveIn ? 'Tennyu shōmei-sho' : 'Tenshutsu shōmei-sho' },
                                { en: 'Residence card', jp: '在留カード', romaji: 'Zairyū kādo' },
                                { en: 'My Number card', jp: 'マイナンバーカード', romaji: 'Mai nanbā kādo' },
                                { en: 'Health insurance card', jp: '健康保険証', romaji: 'Kenkō hoken-shō' },
                                { en: 'Seal/stamp', jp: '印鑑', romaji: 'Inkan' },
                                { en: 'Power of attorney', jp: '委任状', romaji: 'Ininjō' },
                                { en: 'Representative/proxy', jp: '代理人', romaji: 'Dairi-nin' }
                            ].map((phrase, i) => (
                                <div key={i} style={{ padding: '0.65rem 0.875rem', background: 'rgba(0, 0, 0, 0.02)', border: '1px solid rgba(0, 0, 0, 0.06)', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }}>
                                    <div style={{ fontWeight: '600' }}>{phrase.en}</div>
                                    <div style={{ color: 'var(--color-primary)' }}>{phrase.jp} <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>({phrase.romaji})</span></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </GuideLayout>
    );
};

export default MovingGuide;
