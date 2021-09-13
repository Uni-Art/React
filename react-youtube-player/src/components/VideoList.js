import VideoItem from "./VideoItem";

// class VideoList extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				Video list
// 				{videos}
// 			</div>
// 		)
// 	}
// }

const VideoList = ({videos, onVideoSelect}) => {
	const renderList = videos.map((video) => {
		return (
			<VideoItem
				key={video.id.videoId}
				onVideoSelect={onVideoSelect}
				video={video}
			/>
		)
	});

	return (
		<div className="ui relaxed divided list">
			{renderList}
		</div>
	);
}

export default VideoList;