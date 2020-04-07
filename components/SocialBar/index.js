import React from 'react'
import * as S from './styled'
import * as ui from '../../ui'

const SocialBar = props => (
    <S.Social>
        <li>
            <a href="https://twitter.com/wweb_dev" target="_blank" rel="noopener">
                <ui.Screenreader>Twitter</ui.Screenreader>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M 24 4.557 c -0.883 0.392 -1.832 0.656 -2.828 0.775 c 1.017 -0.609 1.798 -1.574 2.165 -2.724 c -0.951 0.564 -2.005 0.974 -3.127 1.195 c -0.897 -0.957 -2.178 -1.555 -3.594 -1.555 c -3.179 0 -5.515 2.966 -4.797 6.045 c -4.091 -0.205 -7.719 -2.165 -10.148 -5.144 c -1.29 2.213 -0.669 5.108 1.523 6.574 c -0.806 -0.026 -1.566 -0.247 -2.229 -0.616 c -0.054 2.281 1.581 4.415 3.949 4.89 c -0.693 0.188 -1.452 0.232 -2.224 0.084 c 0.626 1.956 2.444 3.379 4.6 3.419 c -2.07 1.623 -4.678 2.348 -7.29 2.04 c 2.179 1.397 4.768 2.212 7.548 2.212 c 9.142 0 14.307 -7.721 13.995 -14.646 c 0.962 -0.695 1.797 -1.562 2.457 -2.549 Z" /></svg>
            </a>
        </li>
        <li>
            <a href="https://www.facebook.com/wweb.dev.blog" target="_blank" rel="noopener">
                <ui.Screenreader>Facebook</ui.Screenreader>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 510" x="0px" y="0px" width="24" height="24" version="1.1"><path d="M 459 0 H 51 C 22.95 0 0 22.95 0 51 v 408 c 0 28.05 22.95 51 51 51 h 408 c 28.05 0 51 -22.95 51 -51 V 51 C 510 22.95 487.05 0 459 0 Z M 433.5 51 v 76.5 h -51 c -15.3 0 -25.5 10.2 -25.5 25.5 v 51 h 76.5 v 76.5 H 357 V 459 h -76.5 V 280.5 h -51 V 204 h 51 v -63.75 C 280.5 91.8 321.3 51 369.75 51 H 433.5 Z" /></svg>
            </a>
        </li>
        <li>
            <a href="https://github.com/wwebdev" target="_blank" rel="noopener">
                <ui.Screenreader>Github</ui.Screenreader>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
        </li>
        { !props.hideCoffee && <li wfd-id="5">
            <a href="https://www.buymeacoffee.com/wwebdev" target="_blank" rel="noopener">
                <ui.Screenreader>Buy me a coffee</ui.Screenreader>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1866 2742" width="24" height="24"><path opacity="0" d="M0 0l347 .5L208 319H1.5l-1 1L0 0zm1507 0h359v319.5l-1.5-.5h-218l-.5-1.5L1507 0zM0 612h79.5l.5 2.5 7 38v6l3 13v6l3 13v6l3 13v6l3 13v6l3 13v6l7 38v6l3 13v6l3 13v6l3 13v6l3 13v6l3 13v6l3 13v6l4 19v6l3 13v6l3 13v6l3 13v6l3 13v6l3 13v6l3 13v6l4 19v6l1 1 6 41.5H34.5q-1.2.3-.5 6.5l9 46 3 22 2 6 3 22 2 6 3 22 2 6 3 22 2 6 6 39 2 6 1 11 4 17 1 11 4 17 1 11 4 17 1 11 4 17 1 11 4 17 9 56 4 17 1 11 4 17 1 11 4 17 1 11 4 17 4 28 9 45 1 11 4 17 1 11 4 17 1 11 4 17 1 11 4 17v5l8 40 3 22 2 6 1 11 4 17 1 11 4 17 1 11 4 17v5l8 40 3 22 2 6 1 11 2 9 1.5 1.5h86l1-1h19l1.5 1.5v6l7 38 5 38 7 38v6l3 13v6l3 13v6l7 38v6l3 13v6l3 13v6l3 13v6l3 13v6l3 13v6l7 38v6l3 13v6l3 13v6l3 13v6l3 13v6l3 13v6l3 13v6l4 19v6l3 13v6l3 13v6l3 13v6l3 13v6l3 13v6l3 13v6l3 13v6l4 19v6l1 1 5 35.5H.5l-.5-.5V612zm1780 0h85.5l.5.5V2742h-422.5q-1.1-.1-.5-5.5l3-13v-6l3-13v-6l1-1 2-18 3-13v-6l3-13v-6l3-13v-6l4-19v-6l3-13v-6l3-13 3-25 4-19 2-19 7-38v-6l3-13v-6l3-13v-6l3-13v-6l1-1 2-18 3-13v-6l3-13v-6l4-19v-6l3-13v-6l3-13v-6l10-57v-6l6-32v-6l3-13v-6l3-13v-6l3-13v-6l3-13v-6l4-19 3-25.5h14.5l1 1h86l2.5-6.5 1-11 4-17 4-28 2-6 6-39 9-45 1-11 6-28 4-28 2-6 11-67 4-17 1-11 11-56 4-28 4-17 4-28 4-17 1-11 4-17 1-11 4-17 1-11 4-17 1-11 4-17 1-11 4-17 1-11 2-6 6-39 6-28 1-11 4-17 1-11 2-6 1-11 4-17 1-11 2-6 1-11 4-17 1-11 4-17 1-11 4-17 1-11 4-17 8-50.5h-119.5q-1 0-.5-4.5l1-1v-6l1-1 2-18 3-13v-6l3-13v-6l3-13v-6l3-13v-6l4-19v-6l3-13v-6l3-13v-6l3-13v-6l3-13v-6l3-13v-6l3-13v-6l4-19v-6l3-13v-6l1-1 2-18 3-13v-6l3-13v-6l3-13v-6l3-13v-6l4-19v-6l3-13v-6l3-13v-6l3-13 3-25 4-20.5zM327.5 1364h1198q1 0 .5 4.5l-6 29v6l-3 11v6l-3 11v5l-2 6-1 11-2 6v6l-5 22-1 11-3 11v6l-4 17-1 11-3 11v6l-3 11-2 17-3 11v6l-9 44v6l-8 39v6l-3 11v6l-5 22v6l-3 11v6l-5 22v6l-3 11-1 11.5h-42.5l-8-2-355-2-8-2h-214l-8 2-347 2-8 2H407l-7-38.5v-5l-3-11v-6l-3-11-1-11-2-6v-5l-2-6v-6l-6-28v-5l-3-11-3-23-5-22v-6l-3-11v-6l-5-22v-6l-3-11v-6l-8-39v-6l-9-44v-6l-4-17-1-11-3-11v-6l-3-11-2-17-3-11v-6l-.5-1.5z" stroke="#000"/><path opacity=".992" d="M347.5 0h1159l.5 1.5L1646 319h218.5l1.5 1.5v291l-.5.5h-85l-.5 1.5-4 19v6l-3 13v6l-3 13v6l-10 57v6l-3 13v6l-3 13v6l-3 13v6l-3 13v6l-3 13v6l-7 38v6l-3 13v6l-3 13v6l-3 13v6l-3 13v6l-3 13v6l-3 13v6l-4 19v6l-3 13v6l-3 13v6l-3 13v6l-3 13v6l-4 24.5h119.5q1.1.1.5 5.5l-2 6-1 11-2 6v5l-12 62-1 11-4 17-1 11-4 17-1 11-2 6-9 56-2 6-3 22-11 56-1 11-2 6-1 11-2 6v5l-12 62-1 11-4 17-1 11-4 17-1 11-4 17-1 11-2 6-9 56-2 6-3 22-11 56-1 11-2 6v5l-10 51-4 28-11 56-1 11-4 17-1 11-7 34-9 56-2.5 6.5h-86l-1-1H1550v6.5l-7 38v6l-3 13v6l-1 1-2 18-3 13v6l-3 13v6l-4 19-2 19-4 19v6l-3 13v6l-3 13v6l-10 57v6l-3 13v6l-3 13v6l-3 13v6l-3 13v6l-3 13v6l-7 38v6l-3 13-2 19-4 19v6l-3 13v6l-3 13v6l-7 38v6l-3 13v6l-3 13v6l-3 13v6l-3 13v6l-3 13-3 24.5H417.5q-1 0-.5-4.5l-10-57v-6l-3-13v-6l-3-13v-6l-3-13v-6l-3-13v-6l-3-13v-6l-3-13-3-25-4-19v-6l-3-13v-6l-3-13v-6l-3-13v-6l-3-13v-6l-3-13-3-25-4-19v-6l-3-13v-6l-3-13v-6l-3-13v-6l-3-13v-6l-3-13-3-25-4-19v-6l-3-13v-6l-3-13-3-25-4-19v-6l-3-13v-6l-9-51-3-25-1.5-1.5h-19l-1 1h-86l-1.5-1.5-2-9-1-11-2-6-11-67-2-6v-5l-12-62-1-11-4-17-1-11-4-17-4-28-4-17-1-11-2-6v-5l-12-62-1-11-4-17-1-11-4-17-4-28-2-6-8-50-4-17-1-11-4-17-1-11-4-17-4-28-2-6-8-50-4-17-1-11-4-17-1-11-4-17-1-11-4-17-4-28-2-6v-5l-12-62-1-11-4-17-1-11-4-17-5-35.5h125.5l.5-3.5-1-1v-6l-3-13-3-25-4-19v-6l-3-13v-6l-3-13v-6l-3-13v-6l-3-13v-6l-3-13v-6l-3-13v-6l-4-19v-6l-3-13v-6l-3-13v-6l-3-13v-6l-3-13v-6l-3-13v-6l-3-13v-6l-4-19v-6l-3-13v-6l-3-13v-6l-3-13v-6l-3-13v-6l-1-1-2-18-3-13v-6L80 612H.5l-.5-.5v-291l1.5-1.5H208L334 28.5 347.5 0zM328 1364v8l3 11 2 17 3 11v6l3 11 1 11 4 17v6l9 44v6l8 39v6l3 11v6l5 22v6l3 11v6l5 22 3 23 3 11v5l6 28v6l2 6v5l2 6 1 11 3 11v6l3 11v5l7 38h50l8-2 347-2 8-2h214l8 2 355 2 8 2h42l1-11 3-11v-6l5-22v-6l3-11v-6l5-22v-6l3-11v-6l8-39v-6l9-44v-6l3-11 2-17 3-11v-6l3-11 1-11 4-17v-6l3-11 1-11 5-22v-6l2-6 1-11 2-6v-5l3-11v-6l3-11v-6l6-29q0-5 0-5H328z"/></svg>
            </a>
        </li> }
        <li wfd-id="5">
            <a href="mailto:info@wweb.dev">
                <ui.Screenreader>E-Mail</ui.Screenreader>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M0 3v18h24V3H0zm6.623 7.929L2 16.641V7.183l4.623 3.746zM2.482 5h19.035L12 12.713 2.482 5zm5.694 7.188L12 15.287l3.83-3.104L21.442 19H2.663l5.513-6.812zm9.208-1.264L22 7.183v9.348l-4.616-5.607z"></path></svg>
            </a>
        </li>
    </S.Social>
)

export default SocialBar
