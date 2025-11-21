import React from 'react';
import GuideLayout from './GuideLayout';
import { useAuth } from '../../context/AuthContext';

const TrashGuide = () => {
    const { currentUser } = useAuth();

    // Fallback if no ward is selected (e.g. direct link access)
    const userWard = currentUser?.ward || 'general';

    // Ward-specific trash collection rules
    // Note: Schedules can vary by specific area within each ward
    const wardRules = {
        // Tokyo Wards
        adachi: {
            burnable: 'Mon, Thu',
            recyclable: 'Sat',
            nonBurnable: '2nd & 4th Wed'
        },
        arakawa: {
            burnable: 'Tue, Fri',
            recyclable: 'Thu',
            nonBurnable: '1st & 3rd Wed'
        },
        bunkyo: {
            burnable: 'Mon, Thu',
            recyclable: 'Sat',
            nonBurnable: '2nd & 4th Fri'
        },
        chiyoda: {
            burnable: 'Mon, Thu',
            recyclable: 'Sat',
            nonBurnable: '1st & 3rd Fri'
        },
        chuo: {
            burnable: 'Mon, Wed, Fri',
            recyclable: 'Sat',
            nonBurnable: '2nd & 4th Tue'
        },
        edogawa: {
            burnable: 'Mon, Thu',
            recyclable: 'Sat',
            nonBurnable: '1st & 3rd Wed'
        },
        itabashi: {
            burnable: 'Tue, Fri',
            recyclable: 'Wed',
            nonBurnable: '2nd & 4th Sat'
        },
        katsushika: {
            burnable: 'Mon, Thu',
            recyclable: 'Fri',
            nonBurnable: '1st & 3rd Wed'
        },
        kita: {
            burnable: 'Tue, Fri',
            recyclable: 'Thu',
            nonBurnable: '1st & 3rd Sat'
        },
        koto: {
            burnable: 'Mon, Wed, Fri',
            recyclable: 'Sat',
            nonBurnable: '2nd & 4th Thu'
        },
        meguro: {
            burnable: 'Mon, Thu',
            recyclable: 'Sat',
            nonBurnable: '1st & 3rd Wed'
        },
        minato: {
            burnable: 'Mon, Thu',
            recyclable: 'Sat',
            nonBurnable: '2nd & 4th Fri'
        },
        nakano: {
            burnable: 'Tue, Fri',
            recyclable: 'Thu',
            nonBurnable: '1st & 3rd Sat'
        },
        nerima: {
            burnable: 'Mon, Thu',
            recyclable: 'Wed',
            nonBurnable: '2nd & 4th Sat'
        },
        ota: {
            burnable: 'Mon, Wed, Fri',
            recyclable: 'Sat',
            nonBurnable: '2nd & 4th Tue'
        },
        setagaya: {
            burnable: 'Tue, Fri',
            recyclable: 'Thu',
            nonBurnable: '1st & 3rd Wed'
        },
        shibuya: {
            burnable: 'Mon, Thu',
            recyclable: 'Sat',
            nonBurnable: '1st & 3rd Fri'
        },
        shinagawa: {
            burnable: 'Mon, Wed, Fri',
            recyclable: 'Sat',
            nonBurnable: '2nd & 4th Thu'
        },
        shinjuku: {
            burnable: 'Tue, Fri',
            recyclable: 'Wed',
            nonBurnable: '2nd & 4th Sat'
        },
        suginami: {
            burnable: 'Mon, Thu',
            recyclable: 'Sat',
            nonBurnable: '1st & 3rd Wed'
        },
        sumida: {
            burnable: 'Tue, Fri',
            recyclable: 'Thu',
            nonBurnable: '1st & 3rd Sat'
        },
        taito: {
            burnable: 'Mon, Wed, Fri',
            recyclable: 'Sat',
            nonBurnable: '2nd & 4th Tue'
        },
        toshima: {
            burnable: 'Tue, Fri',
            recyclable: 'Wed',
            nonBurnable: '1st & 3rd Thu'
        },
        // Osaka Wards
        kita: {
            burnable: 'Mon, Thu',
            recyclable: 'Tue',
            nonBurnable: '1st & 3rd Fri'
        },
        chuo: {
            burnable: 'Mon, Thu',
            recyclable: 'Tue',
            nonBurnable: '2nd & 4th Fri'
        },
        tennoji: {
            burnable: 'Tue, Fri',
            recyclable: 'Wed',
            nonBurnable: '1st & 3rd Thu'
        },
        nishi: {
            burnable: 'Tue, Fri',
            recyclable: 'Wed',
            nonBurnable: '2nd & 4th Thu'
        },
        // Kyoto Wards
        nakagyo: {
            burnable: 'Mon, Thu',
            recyclable: 'Fri',
            nonBurnable: '2nd & 4th Wed'
        },
        higashiyama: {
            burnable: 'Tue, Fri',
            recyclable: 'Thu',
            nonBurnable: '1st & 3rd Wed'
        },
        shimogyo: {
            burnable: 'Mon, Thu',
            recyclable: 'Fri',
            nonBurnable: '1st & 3rd Tue'
        },
        sakyo: {
            burnable: 'Tue, Fri',
            recyclable: 'Wed',
            nonBurnable: '2nd & 4th Mon'
        },
        // Fukuoka Wards
        hakata: {
            burnable: 'Mon, Thu',
            recyclable: 'Tue',
            nonBurnable: '1st & 3rd Fri'
        },
        chuo: {
            burnable: 'Mon, Thu',
            recyclable: 'Tue',
            nonBurnable: '2nd & 4th Fri'
        },
        higashi: {
            burnable: 'Tue, Fri',
            recyclable: 'Wed',
            nonBurnable: '1st & 3rd Sat'
        },
        sawara: {
            burnable: 'Tue, Fri',
            recyclable: 'Wed',
            nonBurnable: '2nd & 4th Sat'
        },
        general: {
            burnable: 'Usually 2-3x/week',
            recyclable: '1x/week',
            nonBurnable: '1-2x/month'
        }
    };

    const rules = wardRules[userWard] || wardRules.general;
    const wardName = userWard.charAt(0).toUpperCase() + userWard.slice(1);

    return (
        <GuideLayout
            title={`Trash Rules: ${wardName}`}
            subtitle="Japan's garbage sorting rules are strict. Here's what you need to know."
        >
            <div className="info-box" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)', borderLeft: '4px solid #ffc107' }}>
                <h4>⚠️ Important Notice</h4>
                <p>
                    Collection days can vary by specific neighborhood within each ward.
                    Always check the schedule posted at your local collection point or verify with your ward office for your exact area.
                </p>
            </div>

            <div className="guide-section">
                <h2>Collection Schedule for {wardName}</h2>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    marginTop: '1.5rem'
                }}>
                    {/* Burnable Trash */}
                    <div style={{
                        background: 'var(--color-surface)',
                        border: '1px solid rgba(0, 0, 0, 0.06)',
                        borderRadius: 'var(--radius-md)',
                        padding: '1.25rem 1.5rem',
                        borderLeft: '4px solid #ef5350',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '0.75rem',
                            marginBottom: '0.5rem',
                            flexWrap: 'wrap'
                        }}>
                            <span style={{ fontSize: '1.4rem' }}>🔥</span>
                            <strong style={{
                                fontSize: '1.05rem',
                                color: 'var(--color-text-main)',
                                fontWeight: '600'
                            }}>Burnable Trash</strong>
                            <span style={{
                                fontSize: '1.05rem',
                                fontWeight: '700',
                                color: '#ef5350'
                            }}>{rules.burnable}</span>
                        </div>
                        <p style={{
                            margin: 0,
                            fontSize: '0.88rem',
                            color: 'var(--color-text-muted)',
                            lineHeight: '1.5',
                            paddingLeft: '2.15rem'
                        }}>
                            Food scraps, paper scraps, small plastic items, clothes, wood
                        </p>
                    </div>

                    {/* Recyclable Resources */}
                    <div style={{
                        background: 'var(--color-surface)',
                        border: '1px solid rgba(0, 0, 0, 0.06)',
                        borderRadius: 'var(--radius-md)',
                        padding: '1.25rem 1.5rem',
                        borderLeft: '4px solid #66bb6a',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '0.75rem',
                            marginBottom: '0.5rem',
                            flexWrap: 'wrap'
                        }}>
                            <span style={{ fontSize: '1.4rem' }}>♻️</span>
                            <strong style={{
                                fontSize: '1.05rem',
                                color: 'var(--color-text-main)',
                                fontWeight: '600'
                            }}>Recyclable Resources</strong>
                            <span style={{
                                fontSize: '1.05rem',
                                fontWeight: '700',
                                color: '#66bb6a'
                            }}>{rules.recyclable}</span>
                        </div>
                        <p style={{
                            margin: 0,
                            fontSize: '0.88rem',
                            color: 'var(--color-text-muted)',
                            lineHeight: '1.5',
                            paddingLeft: '2.15rem'
                        }}>
                            PET bottles, cans, glass bottles, newspapers, cardboard
                        </p>
                    </div>

                    {/* Non-Burnable Trash */}
                    <div style={{
                        background: 'var(--color-surface)',
                        border: '1px solid rgba(0, 0, 0, 0.06)',
                        borderRadius: 'var(--radius-md)',
                        padding: '1.25rem 1.5rem',
                        borderLeft: '4px solid #78909c',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '0.75rem',
                            marginBottom: '0.5rem',
                            flexWrap: 'wrap'
                        }}>
                            <span style={{ fontSize: '1.4rem' }}>🔋</span>
                            <strong style={{
                                fontSize: '1.05rem',
                                color: 'var(--color-text-main)',
                                fontWeight: '600'
                            }}>Non-Burnable Trash</strong>
                            <span style={{
                                fontSize: '1.05rem',
                                fontWeight: '700',
                                color: '#78909c'
                            }}>{rules.nonBurnable}</span>
                        </div>
                        <p style={{
                            margin: 0,
                            fontSize: '0.88rem',
                            color: 'var(--color-text-muted)',
                            lineHeight: '1.5',
                            paddingLeft: '2.15rem'
                        }}>
                            Glass, ceramics, metals (under 30cm), light bulbs, small appliances
                        </p>
                    </div>
                </div>
            </div>

            <div className="guide-section">
                <h2>Detailed Sorting Guidelines</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginTop: '1.5rem' }}>
                    {/* Burnable Trash */}
                    <div>
                        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.875rem' }}>🔥 Burnable Trash <span style={{ fontSize: '0.85rem', fontWeight: '400', color: 'var(--color-text-muted)' }}>(燃やすごみ - Moyasu Gomi)</span></h3>
                        <div style={{ paddingLeft: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                            {['Kitchen scraps (drain liquid first)', 'Paper scraps and tissues', 'Plastic packaging and bags', 'Clothes and fabric', 'Small wooden items', 'Rubber and leather products'].map((item, i) => (
                                <div key={i} style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: '0', color: 'var(--color-text-muted)' }}>•</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recyclable Resources */}
                    <div>
                        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.875rem' }}>♻️ Recyclable Resources <span style={{ fontSize: '0.85rem', fontWeight: '400', color: 'var(--color-text-muted)' }}>(資源ごみ - Shigen Gomi)</span></h3>
                        <div style={{ paddingLeft: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                            {[
                                { title: 'PET Bottles', desc: 'Remove cap and label, rinse, flatten' },
                                { title: 'Cans', desc: 'Rinse aluminum and steel cans' },
                                { title: 'Glass Bottles', desc: 'Rinse and separate by color (clear, brown, other)' },
                                { title: 'Paper', desc: 'Newspapers, magazines, cardboard (tie in bundles)' },
                                { title: 'Milk Cartons', desc: 'Rinse, open, and dry' }
                            ].map((item, i) => (
                                <div key={i} style={{ fontSize: '0.95rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: '0', color: 'var(--color-text-muted)' }}>•</span>
                                    <strong>{item.title}:</strong> <span style={{ color: 'var(--color-text-muted)' }}>{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Non-Burnable Trash */}
                    <div>
                        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.875rem' }}>🔋 Non-Burnable Trash <span style={{ fontSize: '0.85rem', fontWeight: '400', color: 'var(--color-text-muted)' }}>(燃やさないごみ - Moenai Gomi)</span></h3>
                        <div style={{ paddingLeft: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                            {['Glass and ceramics', 'Metal items (under 30cm)', 'Small electronics', 'Light bulbs and fluorescent lights', 'Spray cans (must be empty, pierce a hole)'].map((item, i) => (
                                <div key={i} style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: '0', color: 'var(--color-text-muted)' }}>•</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Oversized Trash */}
                    <div>
                        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.875rem' }}>📦 Oversized Trash <span style={{ fontSize: '0.85rem', fontWeight: '400', color: 'var(--color-text-muted)' }}>(粗大ごみ - Sodai Gomi)</span></h3>
                        <div style={{ paddingLeft: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                            {['Items over 30cm (furniture, bicycles, large appliances)', 'Requires advance reservation with ward office', 'Purchase disposal sticker at convenience store', 'Place sticker on item before collection day'].map((item, i) => (
                                <div key={i} style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: '0', color: 'var(--color-text-muted)' }}>•</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="guide-section">
                <h2>Important Rules</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                    {[
                        { icon: '⏰', title: 'Timing', desc: 'Put trash out by 8:00 AM on collection day', sub: 'Never the night before - attracts crows and pests!' },
                        { icon: '👜', title: 'Bags', desc: 'Use transparent or semi-transparent bags', sub: 'Contents must be visible. Opaque/black bags won\'t be collected' },
                        { icon: '📍', title: 'Location', desc: 'Use designated collection points only', sub: 'Look for signs with collection schedules' },
                        { icon: '🔌', title: 'Special Items', desc: 'TVs, fridges, washing machines cannot be regular trash', sub: 'Contact retailer or recycling center for appliances' }
                    ].map((rule, i) => (
                        <div key={i} style={{
                            padding: '1.25rem',
                            background: 'var(--color-surface)',
                            border: '1px solid rgba(0, 0, 0, 0.06)',
                            borderRadius: 'var(--radius-md)',
                            borderLeft: '4px solid var(--color-primary)'
                        }}>
                            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '1.5rem', lineHeight: '1' }}>{rule.icon}</span>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: '600', fontSize: '1rem', marginBottom: '0.35rem' }}>
                                        {rule.title}: <span style={{ fontWeight: '400' }}>{rule.desc}</span>
                                    </div>
                                    <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                                        {rule.sub}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{
                backgroundColor: 'rgba(76, 175, 80, 0.08)',
                borderLeft: '4px solid #4caf50',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem'
            }}>
                <h4 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>💡 Pro Tips</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {[
                        'Download your ward\'s official garbage app for schedules and reminders',
                        'Keep a separation guide on your kitchen wall',
                        'Rinse all recyclables to prevent odors',
                        'Breaking down cardboard saves space and is required',
                        'When in doubt, ask neighbors or building management'
                    ].map((tip, i) => (
                        <div key={i} style={{
                            fontSize: '0.95rem',
                            paddingLeft: '1.5rem',
                            position: 'relative',
                            color: 'var(--color-text-main)'
                        }}>
                            <span style={{ position: 'absolute', left: '0', color: '#4caf50', fontWeight: '600' }}>•</span>
                            {tip}
                        </div>
                    ))}
                </div>
            </div>
        </GuideLayout>
    );
};

export default TrashGuide;
