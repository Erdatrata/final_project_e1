import React from "react";

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from '../styles/FeedStyles';
const PostCrad = ({item}) =>{
    likeIcon=item.liked ? 'heart':'heart-outline';
    likeIconColor= item.liked ?'#2e64e5':'#333';
    if(item.likes==1){
        likeText='1 Like';
    }else if(item.likes > 1){
        likeText=item.likes +'Likes';
    }else{
        likeText='Like';
    }
    if(item.comments==1){
        commentText='1 comment';
    }else if(item. comments > 1){
        commentText=item. comments +'comments';
    }else{
        commentText='comment';
    }
    return(
        <Card>
        <UserInfo>
          <UserImg source={item.userImg}/>
          <UserInfoText>
            <UserName>{item.userName}</UserName>
            <PostTime>{item.postTime}</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>{item.post}</PostText>
        {item.postImg != 'none' ? <PostImg source={item.postImg}/> :<Divider/>}
        {/* <PostImg source={require('../assets/posts/post-img-2.jpg')}/> */}
        <InteractionWrapper>
        <Interaction active={item.liked}>
          <Ionicons name="heart" size={25} color='#2e64e5'/>
         <InteractionText active>{likeText}</InteractionText>
         </Interaction>
         <Interaction >
         <Ionicons name="md-chatbubble-outline" size={25}/>
         <InteractionText>{commentText}</InteractionText>
         </Interaction>
        </InteractionWrapper>
      </Card>
    );
};
export default PostCrad;