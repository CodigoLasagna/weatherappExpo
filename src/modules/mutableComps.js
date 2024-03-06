import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { colors } from '../styles/global';

const MutableText = ({ style = {}, children, fontSize = 32, color = 'black', bkg = colors.background, margin = 0, padding = 0, borderRadius = 0, ...otherProps }) => {
	const mergedStyle = { fontSize, backgroundColor: bkg, color, margin, padding, borderRadius, ...style };
	return <Text style={mergedStyle} {...otherProps}>{children}</Text>;
};

const MutableImage = ({ style = {}, source, margin = 0, padding = 0, borderRadius = 0, ...otherProps }) => {
	const mergedStyle = { margin, padding, borderRadius, ...style };
	return <Image style={mergedStyle} source={source} {...otherProps} />;
};

const MutableFlatList = ({ style = {}, data = [], renderItem, keyExtractor, margin = 0, padding = 0, borderRadius = 0, ...otherProps }) => {
	const mergedStyle = { margin, padding, borderRadius, ...style };
	return (
		<FlatList
			style={mergedStyle}
			data={data}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
			{...otherProps}
		/>
	);
};

export { MutableText, MutableImage, MutableFlatList };
