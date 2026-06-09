import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { infoDescription } from './resources/info';

export class O2CzSociodemo implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'o2-cz-sociodemo',
		name: 'N8nDevO2CzSociodemo',
		icon: { light: 'file:./o2-cz-sociodemo.png', dark: 'file:./o2-cz-sociodemo.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Socio-demo API can be used to obtain time-aggregated data representing groups of people on the given location in the Czech Republic. Having a location, the API can return count of people belonging ..',
		defaults: { name: 'o2-cz-sociodemo' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevO2CzSociodemoApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Info",
					"value": "Info",
					"description": ""
				}
			],
			"default": ""
		},
		...infoDescription
		],
	};
}
