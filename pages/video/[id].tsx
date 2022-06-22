import React from 'react';
import VideoCardLists from '../../components/Video/video-card-lists';
import { blogsLists } from '..';

const VideoDetails = () => {
  return (
    <div>
      <section>
        <VideoCardLists videoLists={blogsLists} />
      </section>
    </div>
  );
};

export default VideoDetails;
