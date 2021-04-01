import { useParams } from '@reach/router';
import React, { useContext, useEffect } from 'react'
import { secondaryDataContext } from '../../../contexts/SecondaryDataContext';
import Layout from '../../components/layout';
import style from "./style.module.scss";
import { Image, Wrapper } from './styles';


export default function ProjectDetailPage() {

	const { fetchProject, projectDetail } = useContext(secondaryDataContext);
	const {projectId} = useParams();

	useEffect(() => {
		fetchProject(projectId)
	}, [])


	return (
		<Layout>
			<main>
				<Wrapper>
					<div className={style.cell}>
						<Image img={projectDetail?.image} />

						<span>{projectDetail?.made_on}</span>
						<h4>{projectDetail?.title}</h4>
						
						<div dangerouslySetInnerHTML={{
							__html: projectDetail?.description
						}}>
						</div>

					</div>
				</Wrapper>
			</main>
		</Layout>
	)
}
