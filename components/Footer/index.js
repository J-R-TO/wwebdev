import React from 'react'
import Link from 'next/link'
import * as S from './styled'

const Footer = () => (
  <S.Container>
    <S.Content>
      <div>
        <Link href='/'>
          <a>
            <img src="/logo.png" alt="wweb.dev Logo" />
          </a>
        </Link>
        <S.Copyright>
          © {new Date().getFullYear()} - wweb.dev
        </S.Copyright>
      </div>

      <S.RightFooter>
        <S.Social>
          <li>
            <a href="https://twitter.com/wweb_dev" target="_blank" rel="noopener">
              <S.Screenreader>Twitter</S.Screenreader>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M 24 4.557 c -0.883 0.392 -1.832 0.656 -2.828 0.775 c 1.017 -0.609 1.798 -1.574 2.165 -2.724 c -0.951 0.564 -2.005 0.974 -3.127 1.195 c -0.897 -0.957 -2.178 -1.555 -3.594 -1.555 c -3.179 0 -5.515 2.966 -4.797 6.045 c -4.091 -0.205 -7.719 -2.165 -10.148 -5.144 c -1.29 2.213 -0.669 5.108 1.523 6.574 c -0.806 -0.026 -1.566 -0.247 -2.229 -0.616 c -0.054 2.281 1.581 4.415 3.949 4.89 c -0.693 0.188 -1.452 0.232 -2.224 0.084 c 0.626 1.956 2.444 3.379 4.6 3.419 c -2.07 1.623 -4.678 2.348 -7.29 2.04 c 2.179 1.397 4.768 2.212 7.548 2.212 c 9.142 0 14.307 -7.721 13.995 -14.646 c 0.962 -0.695 1.797 -1.562 2.457 -2.549 Z" /></svg>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/wweb.dev.blog" target="_blank" rel="noopener">
              <S.Screenreader>Facebook</S.Screenreader>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 510" x="0px" y="0px" width="24" height="24" version="1.1"><path d="M 459 0 H 51 C 22.95 0 0 22.95 0 51 v 408 c 0 28.05 22.95 51 51 51 h 408 c 28.05 0 51 -22.95 51 -51 V 51 C 510 22.95 487.05 0 459 0 Z M 433.5 51 v 76.5 h -51 c -15.3 0 -25.5 10.2 -25.5 25.5 v 51 h 76.5 v 76.5 H 357 V 459 h -76.5 V 280.5 h -51 V 204 h 51 v -63.75 C 280.5 91.8 321.3 51 369.75 51 H 433.5 Z" /></svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/Vincenius" target="_blank" rel="noopener">
              <S.Screenreader>Github</S.Screenreader>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
          </li>
          <li wfd-id="5">
            <a href="mailto:info@wweb.dev">
              <S.Screenreader>E-Mail</S.Screenreader>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M0 3v18h24V3H0zm6.623 7.929L2 16.641V7.183l4.623 3.746zM2.482 5h19.035L12 12.713 2.482 5zm5.694 7.188L12 15.287l3.83-3.104L21.442 19H2.663l5.513-6.812zm9.208-1.264L22 7.183v9.348l-4.616-5.607z"></path></svg>
            </a>
          </li>
        </S.Social>

        <S.FooterLinks>
          <li><a href="/privacy">Privacy Policy</a></li>
        </S.FooterLinks>
      </S.RightFooter>
    </S.Content>
  </S.Container>
)

export default Footer
