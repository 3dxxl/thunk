export const DASISTEINEACTION = (data) => {
	console.log('inside DASISTEINEACTION');
	return {
		type: 'DASISTEINEACTION',
		data
	}
}

export const DASISTEINEACTIONZWEI = (datazwei) => {
	console.log('inside DASISTEINEACTIONZWEI');
	return {
		type: 'DASISTEINEACTIONZWEI',
		datazwei
	}
}




export function THUNKDASISTEINEACTIONZWEI() {
	return (dispatch, getState) => {

		console.log(getState());
		dispatch(DASISTEINEACTIONZWEI('orange'));



	}
}


export function THUNKDASISTEINEACTION() {
	return (dispatch, getState) => {

		console.log(getState());
		dispatch(DASISTEINEACTION('blue'));



	}
}


