import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import RestaurantCard from './RestaurantCard';
import client from '../sanity';

const FeaturedRow = ({id,title,description}) => {

  const [restaurants,setRestaurants] = useState([]);

  useEffect(() => {
    const query=`*[_type=="featured" && _id==$id] {
      ...,
      restaurants[] -> {
        ...,
        dishes[]->,
        type->{
          name
        }
      }
    }[0]`
    client.fetch(query,{id}).then(data => {
      setRestaurants(data?.restaurants);
    })
  },[id]);

  console.log(restaurants);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >

        {restaurants?.map(restaurant => {
          return (
            <RestaurantCard 
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              address={restaurant.address}
              title={restaurant.title}
              dishes={restaurant.dishes}
              rating={restaurant.rating}
              short_description={restaurant.short_description}
              genre={restaurant.type?.name}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          )
        })}

        {/* <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! shushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main 51"
          short_description="This is a test desc"
          dishes={[]}
          long={20}
          lat={35}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! shushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main 51"
          short_description="This is a test desc"
          dishes={[]}
          long={20}
          lat={35}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! shushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main 51"
          short_description="This is a test desc"
          dishes={[]}
          long={20}
          lat={35}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! shushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main 51"
          short_description="This is a test desc"
          dishes={[]}
          long={20}
          lat={35}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! shushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main 51"
          short_description="This is a test desc"
          dishes={[]}
          long={20}
          lat={35}
        /> */}
      </ScrollView>
    </View>
  );
}

export default FeaturedRow