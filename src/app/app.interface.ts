export interface PadData {
	groups: { [id: string]: GroupData };
}

export interface GroupData {
	groupName: string;
	data: Data[];
}

export interface Data {
	text: string;
	status: boolean;
}
