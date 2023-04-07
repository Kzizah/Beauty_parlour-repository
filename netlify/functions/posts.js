let response=[
    {
        "id": "1",
        "service_name": " Eyebrow Shaping",
        "description": "Brow shaping involves waxing and tweezing along your brow's natural lines to ensure a perfect contour.",
        "image": "https://www.belmorecentre.co.uk/wp-content/uploads/2018/03/Eyebrow-Shaping.jpg",
        "session_slots": 50,
        "booked_slots": 37,
        "price": "USD 750"
      },
      {
        "id": "2",
        "service_name": "Eye and Lip  Contour Treatment",
        "description": "Reduces the appearance of wrinkles around the eyes and lip. Reduces roughness, smoothing and improving skin texture. Improves visible skin firmness. Plumps skin so wrinkle depth appears decreased.",
        "image": "https://cdn.shopify.com/s/files/1/0604/8779/4932/products/beautyfirstspa-eye-lip-treatment-36237169754356.jpg",
        "session_slots": 43,
        "booked_slots": 27,
        "price": "USD 560"
      }
]
export async function handler(event, context) {
    return {
        statusCode : 200,
        body : JSON.stringify(response),
        headers: {
			'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
		},
    }

}