import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import client, { urlFor } from '../sanity';

const Categories = () => {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const query=`*[_type=="category"]`;
    client.fetch(query).then(data => {
      setCategories(data);
    })
  },[]);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {categories?.map(category => {
        console.log("category:",category);
        return (
          <CategoryCard
            key={category._id}
            imageUrl={urlFor(category.image).width(200).url()}
            title={category.title}
            // imageUrl={"https://papareact/"}
          />
        )
      })}

    </ScrollView>
  );
}

export default Categories