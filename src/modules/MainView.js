import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import ApiRequests from '../modules/axiosModule';

const MainView = () => {
    const [pokemonData, setPokemonData] = useState(null);
    const [pokemonSprites, setPokemonSprites] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ApiRequests.get('pokemon');
                setPokemonData(response.results);
                console.log(response.results);

                response.results.forEach(async (pokemon) => {
                    const id = pokemon.url.split('/').filter(Boolean).pop();
                    const spriteUrl = await fetchPokemonSprite(id);
                    setPokemonSprites(prevState => ({
                        ...prevState,
                        [id]: spriteUrl
                    }));
                });
            } catch (error) {
                console.log("Error al obtener los datos:", error);
            }
        };

        fetchData();
    }, []);

    const fetchPokemonSprite = async (id) => {
        try {
            const response = await ApiRequests.get(`pokemon/${id}`);
            return response.sprites.front_shiny;
        } catch (error) {
            console.log("Error al obtener los sprites del Pokémon:", error);
            return null;
        }
    };

    const renderPokemon = ({ item }) => {
        const id = item.url.split('/').filter(Boolean).pop();
        const spriteUrl = pokemonSprites[id];
        return (
            <View style={styles.pokemonContainer}>
                <Text style={styles.condition}>{item.name}</Text>
                <Image
                    style={styles.sprite}
                    source={{ uri: spriteUrl }}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {pokemonData && (
                <FlatList
                    style={styles.flatContainer}
                    data={pokemonData}
                    renderItem={renderPokemon}
                    keyExtractor={(item) => item.name}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1B232B',
    },
    flatContainer: {
        backgroundColor: '#1F3B4D',
        width: '90%',
        borderRadius: 16,
        marginTop: 20,
        padding: 20
    },
    pokemonContainer: {
        marginVertical: 10,
        alignItems: 'center',
    },
    condition: {
        fontSize: 18,
        color: '#81DC26',
        marginBottom: 10,
    },
    sprite: {
        width: 100,
        height: 100,
    },
    text: {
        fontSize: 18,
        color: '#d3d3d3',
    },
});

export default MainView;
