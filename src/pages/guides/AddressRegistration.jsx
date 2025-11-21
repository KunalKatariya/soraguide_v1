import React from 'react';
import GuideLayout from './GuideLayout';

const AddressRegistration = () => {
    return (
        <GuideLayout
            title="Registering Your Address"
            subtitle="The 'Tennyu Todoke' (Moving-in Notification) is your first official step in Japan."
        >
            <div className="guide-section">
                <h2>Why is this urgent?</h2>
                <p>
                    You must register your address at your local Ward Office (Kuyakusho) or City Hall (Shiyakusho)
                    <strong> within 14 days</strong> of moving in. Failure to do so can result in fines and issues with your visa.
                </p>
            </div>

            <div className="guide-section">
                <h2>What to Bring</h2>
                <ul className="guide-list">
                    <li><strong>Passport:</strong> Required for identification.</li>
                    <li><strong>Residence Card (Zairyu Card):</strong> Your primary ID in Japan.</li>
                    <li><strong>My Number Card:</strong> If you already have one (or the notification slip).</li>
                    <li><strong>Hankō (Personal Seal):</strong> Optional but recommended if you have one. Signatures are often accepted for foreigners.</li>
                </ul>
            </div>

            <div className="guide-section">
                <h2>The Process</h2>
                <ol className="guide-list" style={{ listStyle: 'decimal', paddingLeft: '1.5rem' }}>
                    <li>Go to the <strong>Citizens' Affairs Division (Shimin-ka)</strong> at your ward office.</li>
                    <li>Look for the form named <strong>"Tennyu Todoke" (転入届)</strong>.</li>
                    <li>Fill out the form (English samples are often available).</li>
                    <li>Take a number and wait for your turn.</li>
                    <li>Submit your documents. Your Residence Card will be updated with your new address on the back.</li>
                </ol>
            </div>

            <div className="info-box">
                <h4>💡 Pro Tip: National Health Insurance</h4>
                <p>
                    You can usually sign up for National Health Insurance (Kokumin Kenko Hoken) at the same time.
                    Ask for the "Hoken-ka" (Insurance Division) after you finish your address registration.
                </p>
            </div>

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
                                { en: 'I would like to register my address', jp: '転入届を出したいのですが', romaji: 'Tennyu todoke wo dashitai no desu ga' }
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

                    {/* Common Questions You Might Be Asked */}
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
                                { en: 'Moving-in form', jp: '転入届', romaji: 'Tennyu todoke' },
                                { en: 'Moving-in certificate', jp: '転入証明書', romaji: 'Tennyu shōmei-sho' },
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

export default AddressRegistration;
