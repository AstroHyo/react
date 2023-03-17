import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from './../data.js';
import VideoThumbnail from '../videoThumbnail.js';
import styles from './Upload.module.css';

function Upload() {

    let [videoUrl, setVideoUrl] = useState(true);

    return (
        <main>
            <form>
                <label for="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter title..."
                />
                <label for="video-link">Youtube Video Link</label>
                <input
                    type="text"
                    id="video-link"
                    name="video-link"
                    placeholder="Enter Youtube video link..."
                />
                <div id="video-embed"></div>
                <label for="memo">Memo</label>
                <textarea id="memo" name="memo" placeholder="Enter memo..."></textarea>
                <button type="submit">Save</button>
            </form>
        </main>
        
    )
}


export default Upload;