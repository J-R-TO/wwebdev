import React from 'react'
import LazyLoad from 'react-lazy-load'
import * as S from './styled'
import * as ui from '../../ui'

const ArticlePreview = ({
  date,
  link,
  headline,
  description,
  type,
  previewImage,
}) => {
  const d = new Date(date)
  const isResource = type === 'Resource'

  return (
    <S.Container>
      { previewImage &&
        <a href={link}>
          <ui.Screenreader>{headline}</ui.Screenreader>
          <LazyLoad offsetVertical={1000}>
            <S.PreviewImage
              sizes={
                `(max-width: 320px) 320px,
                (max-width: 380px) 380px,
                (max-width: 480px) 480px,
                (max-width: 640px) 180px,
                200px`
              }
              srcSet={
                `https://ik.imagekit.io/wwebdev/tr:w-100/${previewImage} 100w,
                  https://ik.imagekit.io/wwebdev/tr:w-200/${previewImage} 200w,
                  https://ik.imagekit.io/wwebdev/tr:w-320/${previewImage} 320w,
                  https://ik.imagekit.io/wwebdev/tr:w-380/${previewImage} 380w,
                  https://ik.imagekit.io/wwebdev/tr:w-400/${previewImage} 400w,
                  https://ik.imagekit.io/wwebdev/tr:w-480/${previewImage} 480w,
                  https://ik.imagekit.io/wwebdev/tr:w-640/${previewImage} 640w,
                  https://ik.imagekit.io/wwebdev/tr:w-760/${previewImage} 760w,
                  https://ik.imagekit.io/wwebdev/tr:w-960/${previewImage} 960w
                `
              }
              src={`https://ik.imagekit.io/wwebdev/${previewImage}`}
              alt={headline}
            />
          </LazyLoad>
        </a>
      }
      <div>
        <header>
          { type &&
            <S.Type highlight={isResource}>
              <b>{type}</b> -&nbsp;
            </S.Type>
          }
          <S.Time datetime={d.toISOString()}>{date}</S.Time>
          <S.Headline>
            <a href={link}>{headline}</a>
          </S.Headline>
        </header>
        <p>{description}</p>
        <S.ReadMore href={link}>
          { isResource ? 'Open Resource' : 'Read more' }
        </S.ReadMore>
      </div>
    </S.Container>
  )
}

export default ArticlePreview
