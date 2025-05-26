'use client'

import React, { useEffect, useRef } from 'react';
import random from 'lodash.random';
import { animate } from 'animejs';

export default function Wave() {
    const waveStartRef = useRef<SVGSVGElement | null>(null);
    const waveEndRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        const startPaths = waveStartRef.current?.querySelectorAll<SVGPathElement>('path') ?? null;
        const endPaths = waveEndRef.current?.querySelectorAll<SVGPathElement>('path') ?? null;

        if (startPaths === null) {
            return;
        }

        startPaths.forEach((path: SVGPathElement, index: number) => {
            animate(path, {
                duration: random(3000, 5000),
                ease: 'inOutQuad',
                d: endPaths?.[index]?.getAttribute('d'),
                loop: true,
                alternate: true,
            });
        });
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <svg ref={waveStartRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          min-w-full min-h-full w-auto h-auto
                          landscape:w-[160vw] landscape:h-auto
                          portrait:w-auto portrait:h-[200vh]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
                <g>
                    <path d="M0 0V978H1682C1613 806 1582 727 1524 616C1483 520 1542 342 1495 270C1457 215 1365 173 1302 122C1256 85 1166 0 1166 0H0Z" fill="#1E3A8A" />
                    <path d="M1068 0H0V978H1586C1348 834 1512 512 1381 328C1322 246 1202 225 1138 147C1104 107 1068 0 1068 0Z" fill="#1e3b8f" />
                    <path d="M0 0V978H1316C1314 856 1319 726 1282 609C1248 500 1186 402 1124 307C1093 261 1063 215 1031 171C986 110 867 0 867 0H0Z" fill="#1e3c94" />
                    <path d="M0 0L0 978H1185C1159 859 1132 734 1071 627C1041 578 1009 531 977 484C915 397 837 335 761 260C678 181 591 95 481 60C423 38 327 0 327 0H0Z" fill="#1e3d99" />
                    <path d="M0 86V977L1034 978C950 853 926 725 816 605C729 510 621 446 523 367C427 290 354 187 243 133C173 100 61 110 0 86Z" fill="#1e3e9e" />
                    <path d="M0 335V978H793C793 978 694 770 613 693C443 529 226 549 0 335Z" fill="#1e3fa3" />
                    <path d="M0 527V978H584C584 978 531 828 477 773C353 648 142 712 0 527Z" fill="#1E40AF" />
                </g>
            </svg>
            <svg style={{ display: 'none' }} ref={waveEndRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
                <g>
                    <path d="M0 0V982H1682C1671 795 1612 712 1554 601C1513 506 1525 375 1477 274C1444 203 1391 141 1335 87C1300 54 1215 0 1215 0H0Z" fill="#1E3A8A" />
                    <path d="M1068 0H0V982H1586C1348 838 1444 547 1338 347C1294 263 1240 183 1178 111C1145 75 1068 0 1068 0Z" fill="#1e3b8f" />
                    <path d="M0 0V982H1316C1314 860 1270 746 1245 631C1223 525 1238 399 1176 314C1099 208 1020 201 946 141C857 70 867 0 867 0H0Z" fill="#1e3c94" />
                    <path d="M0 0L0 982H1158C1158 982 1176 855 1092 695C1053 621 1064 523 1013 457C943 367 812 347 724 273C647 208 586 125 521 49C507 33 482 0 482 0L0 0Z" fill="#1e3d99" />
                    <path d="M0 87V982H1034 978C1001 824 892 791 834 634C789 513 668 386 560 315C457 247 302 257 189 205C122 174 61 111 0 87Z" fill="#1e3e9e" />
                    <path d="M0 339V982H793C793 982 664 674 543 569C394 440 226 553 0 339Z" fill="#1e3fa3" />
                    <path d="M0 531V982H641C641 982 612 782 434 680C282 592 142 716 0 531Z" fill="#1E40AF" />
                </g>
            </svg>
        </div>
    );
};