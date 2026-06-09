import type { INodeProperties } from 'n8n-workflow';

export const infoDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Info"
					]
				}
			},
			"options": [
				{
					"name": "Get Info",
					"value": "Get Info",
					"action": "Information about versions of application and data.",
					"description": "Information about versions of application and data.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/info"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Info"
					],
					"operation": [
						"Get Info"
					]
				}
			}
		},
];
