import React from 'react'
import Link from 'next/link'
import LazyLoad from 'react-lazy-load'
import { SocialBar, BuyMeACoffeeButton } from '../'
import * as S from './styled'
import * as ui from '../../ui'

const Footer = () => (
  <S.Container>
    <S.Content>
      <div>
        <Link href='/'><a>
          <ui.Screenreader>go to home</ui.Screenreader>
          <LazyLoad height={59} offsetVertical={1000}>
            <img src="https://ik.imagekit.io/wwebdev/tr:w-200/logo_RnCn4cnua.png" alt="wweb.dev Logo" />
          </LazyLoad>
        </a></Link>
        <S.Copyright>
          © {new Date().getFullYear()} - wweb.dev
        </S.Copyright>
      </div>

      <S.RightFooter>
        <SocialBar />

        <BuyMeACoffeeButton />

        <S.FooterLinks>
          <li><Link href="/privacy"><a>Privacy Policy</a></Link></li>
        </S.FooterLinks>
      </S.RightFooter>
    </S.Content>
  </S.Container>
)

export default Footer
