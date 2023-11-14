// learn more about HTTP functions here: https://arc.codes/http
export async function handler(req) {
	return {
		statusCode: 200,
		headers: {
			'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
			'content-type': 'text/html; charset=utf8',
		},
		body: `
			<!DOCTYPE html>
			<html lang="en">
				<head>
					<meta charset="UTF-8" />
				</head>
				<body class="padding-32">
				${Object.entries(process.env)
					.map(([k, v]) => `<div><b>${k}</b>: ${v}</div>`)
					.join('\n')}
				</body>
			</html>
		`,
	};
}
