import { useParams } from '@reach/router';
import React, { useContext, useEffect } from 'react'
import { secondaryDataContext } from '../../../contexts/SecondaryDataContext';
import Layout from '../../components/layout';
import style from "./style.module.scss";
import { Image, Wrapper } from './styles';


export default function BlogDetailPage() {

	const { fetchPost, postDetail } = useContext(secondaryDataContext);
	const { postId } = useParams();

	useEffect(() => {
		fetchPost(postId)
	}, [])

	return (
		<Layout>
			<main>
				<Wrapper>
					<div className={style.cell}>
						<Image img={postDetail?.images[0].file} />

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
