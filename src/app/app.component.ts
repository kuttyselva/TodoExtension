import { Component, ElementRef, OnDestroy } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { PadData } from './app.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'TodoExtension';
	padData: PadData;
	padGroup = [];
	padForm = this.fb.group({
		data: [''],
	});
	createGroupForm = this.fb.group({
		grpName: [''],
	});
	constructor(private fb: FormBuilder) {
		this.getGroups();
		window.onblur = () => {
			localStorage.setItem('grouping', JSON.stringify(this.padData));
		};
	}
	getGroups() {
		const groupings = localStorage.getItem('grouping');
		console.log(groupings);
		if (groupings) {
			this.padData = JSON.parse(groupings);
		} else {
			this.padData = {
				groups: {
					'Sample Group': {
						groupName: 'Sample Group',
						data: [],
					},
				},
			};
		}
		this.padGroup = Object.keys(this.padData.groups);
	}
	addData(grpName) {
		event.preventDefault();
		if (this.padForm.value.data.length > 0) {
			console.log(grpName, this.padForm.value);
			this.padData.groups[grpName].data.push({ text: this.padForm.value.data, status: false });
			this.padForm.reset();
		}
	}
	removeData(grpName, index) {
		this.padData.groups[grpName].data.splice(index, 1);
	}
	removeGroup(grpName) {
		delete this.padData.groups[grpName];
		this.padGroup = Object.keys(this.padData.groups);
	}
	changeStatus(grpName, index) {
		this.padData.groups[grpName].data[index].status = !this.padData.groups[grpName].data[index].status;
	}
	createGroup() {
		event.preventDefault();
		if (this.createGroupForm.value.grpName.length > 0) {
			this.padData.groups[this.createGroupForm.value.grpName] = { groupName: this.createGroupForm.value.grpName, data: [] };
			this.padGroup = Object.keys(this.padData.groups);
			this.createGroupForm.reset();
		}
	}
	activate(data: HTMLElement, type, event: HTMLElement) {
		data.childNodes?.forEach((child: HTMLElement) => {
			child.childNodes?.forEach((tasks: HTMLElement) => {
				if (tasks.classList.contains('task-item')) {
					if (type == 'all') {
						this.toggleFilters(event, type);
						tasks.classList.remove('d-none');
						tasks.classList.add('d-flex');
					}
					if (type == 'active') {
						this.toggleFilters(event, type);
						if (tasks.classList.contains('is-completed')) {
							tasks.classList.add('d-none');
							tasks.classList.remove('d-flex');
						} else {
							tasks.classList.add('d-flex');
							tasks.classList.remove('d-none');
						}
					}
					if (type == 'completed') {
						this.toggleFilters(event, type);
						if (!tasks.classList.contains('is-completed')) {
							tasks.classList.add('d-none');
							tasks.classList.remove('d-flex');
						} else {
							tasks.classList.add('d-flex');
							tasks.classList.remove('d-none');
						}
					}
				}
			});
		});
	}
	toggleFilters(event, type) {
		event.childNodes.forEach((filters: HTMLElement) => {
			if (filters.classList.contains(type)) {
				filters.classList.add('is-active');
			} else {
				filters.classList.remove('is-active');
			}
		});
	}
}
