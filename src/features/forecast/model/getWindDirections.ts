
export const getWindDirections = (deg: number) => {
	const directions = ['N', 'N-E', 'E', 'S-E', 'S', 'S-W', 'W', 'N-W']
	const index = Math.round(deg / 45) % 8 
	return directions[index]
}