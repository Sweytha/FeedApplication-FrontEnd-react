import React, { useState, useEffect } from "react";
import "./home.css";
import AddPost from "../../components/addPost/AddPost";
import PostCard from "../../components/postCard/PostCard";

import LoadingIndicator from "../../components/loadingIndicator/LoadingIndicator";

import { getFeedsApi } from "../../util/ApiUtil";

const Home = ({ currentUser }) => {
  const IMAGE_DEFAULT = "https://via.placeholder.com/500";
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  //this is used to render the data on the page by calling the getPosts mathod
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const apiResponse = await getFeedsApi(
      currentUser.token,
      currentUser.username
    );
    if (apiResponse && apiResponse.length > 0) {
      const postsArr = [];
      apiResponse.forEach(({ post, imageMetaData }) => {
        let postObj = { post, postImageUrl: IMAGE_DEFAULT, postDate: "NA" };  //this is used to set default image and default date if thier is no date /image present whiel fetching it from the API
        if (imageMetaData.length > 0) {
          postObj.postImageUrl = imageMetaData[0].imageName;//get the image url from the api response
          postObj.postDate = imageMetaData[0].imageDate;//get the image date from the api response
        }
        postsArr.push(postObj); //push the data to the postsArr
      });
      setPosts(postsArr);//setPosts method will push the data from postsArr to "posts state" created on line 13
    }
    setIsLoading(false);// now all the posts are retrieved so we set the IsLoading state to false to not see the loading icon
  };
// until the posts are not retreived from the API, we show this loading indicator 
  if (isLoading) {
    return <LoadingIndicator fullPage />;
  }

  return (
    <div className="bg-[#fafafa]">
      <AddPost currentUser={currentUser} />
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-indigo-700 capitalize lg:text-4xl">
          Recent Feeds
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8  md:grid-cols-2">
          {/* posts state has the meaningful data which is post,postImageUrl,postDate, we map through it to fetch and display
          it in PostCard component*/ }
          {posts.map(({ post, postImageUrl, postDate }) => {
            return (
              <PostCard
                post={post}
                postImageUrl={postImageUrl}
                postDate={postDate}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;