import { plugins } from './plugins';

export default {
	assets: {
		// AddPlaceIllustration: require('../../assets/common/create-place.png'),
		// PlacePlaceholder: '../../assets/common/place-placeholder.png',
		// PlaceTypeIllustration: require('../../assets/common/site-not-found.png'),
	},
	configs: {
		title: 'Mevris Places App Demo',

		'plugin.mapview.api-key': 'AIzaSyCgVYH02v3XYmCSIokoLOZzvUqJG6ZamMY',
		'plugin.user.management.facebook.appId': '549524105530640',

		// 'user.accessToken':
		// 	// tslint:disable-next-line: max-line-length
		// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJzb24iOnsiY3JlYXRlZEF0IjoiMjAxOS0wNS0xNVQwNzozNDoyMC40NjlaIiwidXBkYXRlZEF0IjoiMjAxOS0wNS0xNVQwNzozNDoyMS4yNTNaIiwiaWQiOiI1Y2RiYzBmZDA4NWIxYzIxOGVmZTQ5MWQiLCJmaXJzdE5hbWUiOiJBbWFhciIsImxhc3ROYW1lIjoiSGFzc2FuIiwiZW1haWwiOiJhbWFhcmhhc3NhbmNzQGdtYWlsLmNvbSIsImVtYWlsVmVyaWZpZWQiOnRydWUsImlzU29jaWFsIjpmYWxzZSwic29jaWFsUHJvdmlkZXIiOiIiLCJwaG9uZSI6IjAzMzY1Njg5ODc4IiwiYWNjZXNzVG9rZW4iOiIiLCJhdmF0YXIiOiJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vbWV2cmlzLWltYWdlLWNkbi9kZWZhdWx0LXByb2ZpbGUtYXZhdGFyLnBuZyIsIm1ldGFkYXRhIjpudWxsLCJzdGF0ZSI6bnVsbCwic3RhdGVNZXRhIjpudWxsLCJoZWFydGJlYXQiOiIiLCJ2ZXJpZmllZEF0IjoiMjAxOS0wNS0xNVQwNzozNDoyMC40NjlaIiwiaXNEZWxldGVkIjpmYWxzZSwiZGVsZXRlZEF0IjoiIiwibGVnYWN5QWNjb3VudElkIjoiIiwic2NoZW1hIjpudWxsLCJkZWxldGVkQnkiOm51bGwsInJvbGUiOiI1Y2FjOTBiNTg1N2U3ODU5MjNkMzJhYjAifSwiaWF0IjoxNTU3OTA1NzI3LCJleHAiOjE1NTc5MDcxNjcsImF1ZCI6Im1ldnJpcy5pbyIsImlzcyI6Im1ldnJpcy5pbyJ9.3LzorQezKKN-Lm86QKGqh23qLOrTVy1SEY3OUK0Pjdo',
		// 'user.id': 'UGVyc29uOjVjZGJjMGZkMDg1YjFjMjE4ZWZlNDkxZA==',

		// // Apollo Graphql Configs
		// 'plugin.apollo.httpLinkOptions': {
		// 	uri: 'https://api-qa.mevris.io/graphql',
		// },

		'user.accessToken':
			// tslint:disable-next-line: max-line-length
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJzb24iOnsiY3JlYXRlZEF0IjoiVGh1IEp1bCAxMSAyMDE5IDExOjM2OjM1IEdNVCswNTAwIChQYWtpc3RhbiBTdGFuZGFyZCBUaW1lKSIsInVwZGF0ZWRBdCI6Ik1vbiBTZXAgMTYgMjAxOSAxNDo1MDo1OSBHTVQrMDUwMCAoUGFraXN0YW4gU3RhbmRhcmQgVGltZSkiLCJpZCI6IjVkMjZkOGYzMTgzY2UwMmZlNGYxYjQ2NSIsImZpcnN0TmFtZSI6Ik9yaWVudCIsImxhc3ROYW1lIjoiR3JvdXAgb2YgQ29tcGFuaWVzIiwiZW1haWwiOiJvcmllbnRway5tZXZyaXNAZ21haWwuY29tIiwiZW1haWxWZXJpZmllZCI6dHJ1ZSwiaXNTb2NpYWwiOmZhbHNlLCJzb2NpYWxQcm92aWRlciI6IiIsInBob25lIjoiIiwiYWNjZXNzVG9rZW4iOiIiLCJzZWNyZXQiOiIiLCJhdmF0YXIiOiJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vbWV2cmlzLWltYWdlLWNkbi9kZWZhdWx0LXByb2ZpbGUtYXZhdGFyLnBuZyIsIm1ldGFkYXRhIjp7fSwic3RhdGUiOnt9LCJzdGF0ZU1ldGEiOnt9LCJibGFja2xpc3QiOmZhbHNlLCJoZWFydGJlYXQiOiIiLCJ2ZXJpZmllZEF0IjoiMjAxOS0xMi0wNVQxMTo1Njo1OC40NzFaIiwiaXNEZWxldGVkIjpmYWxzZSwiZGVsZXRlZEF0IjoiIiwic2NoZW1hIjpudWxsLCJkZWxldGVkQnkiOm51bGwsInJvbGUiOiI1Y2RiZjZlNmUxODUwYjMwOGMwN2JiNTAifSwiaWF0IjoxNTc2MTQyNzEyLCJleHAiOjE1NzYxNDQxNTIsImF1ZCI6Im1ldnJpcy5pbyIsImlzcyI6Im1ldnJpcy5pbyJ9.weJtmKd38Cq8rMoU0PvJFs731uhK2-lz2unsQDaAKno',
		'user.id': 'UGVyc29uOjVkMjZkOGYzMTgzY2UwMmZlNGYxYjQ2NQ==',

		// Apollo Graphql Configs
		'plugin.apollo.httpLinkOptions': {
			uri: 'https://api3.mevris.io/graphql',
		},
	},

	plugins,
};
