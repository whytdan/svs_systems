import {useParams} from '@reach/router';
import React, {useContext, useEffect, useState} from 'react'
import {secondaryDataContext} from '../../../contexts/SecondaryDataContext';
import Layout from '../../components/layout';
import style from "./style.module.scss";
import {Image, Wrapper} from './styles';
import Slider from "react-slick";

export default function BlogDetailPage() {
  const {fetchPost, postDetail} = useContext(secondaryDataContext);
  const {postId} = useParams();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
    fetchPost(postId)
  }, [])

  return (
    <Layout>
      <main>
        <Wrapper>
          <div className={style.cell}>
            <div className={style.sliderWrapper}>
              <Slider {...settings} className={{cursor: "pointer"}}>
                {
                  postDetail?.images.map((image, index) =>
                    (<Image
                      className={style.sliderImg}
                      key={index}
                      img={image.file}/>)
                  )
                }
              </Slider>
            </div>
            <span>{postDetail?.created_on}</span>
            <h4>{postDetail?.title}</h4>

            <div dangerouslySetInnerHTML={{
              __html: postDetail?.description
            }}>
            </div>
          </div>
        </Wrapper>
      </main>
    </Layout>
  )
}
