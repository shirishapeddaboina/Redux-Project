import React from 'react';
import { View, Text,Image,Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const {width}=Dimensions.get("window");
const height = width * 0.6
const images=['https://wallpaperaccess.com/full/3947961.jpg',
'https://p4.wallpaperbetter.com/wallpaper/975/765/275/movies-bollywood-movies-wallpaper-preview.jpg',
'https://wallpapers.oneindia.com/ph-1024x768/2016/05/supreme_146235657810.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2frIARvTFB50joHQbbTdsXab2X-OFykTmDw&usqp=CAU',
'https://www.telugubulletin.com/wp-content/uploads/2021/03/vakeel_saab_1200-696x464.jpg',
'https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2021/major/major-poster-3.jpg',
'https://cdn.wallpapersafari.com/54/42/zYgRC4.jpg'


]
function Carousel() { 
    return (
    
      <View style={{ marginTop: 0.5, width,height}}>
       <ScrollView pagingEnabled horizontal style={{width, height}}>
        {
          images.map((image , index) => (
            <Image 
            key={index}
            source={{ uri:image}}
            style={{ width,height,resizeMode:'cover'}}/>

          ))
  }
          
          
       </ScrollView>
        <View style={{flexDirection:'row',position:'absolute',bottom:0}}>
      <Text style={{color:'white',marginLeft:150}}>⬤</Text>
      </View>
      </View>
     
          )
          }
        export default Carousel;