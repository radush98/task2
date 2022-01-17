import React from 'react';
import { useSelector } from 'react-redux';
import { categories } from '../data/categories';
import { SummaryTableRow } from './SummaryTableRow';

export const SummaryTable = () => {
    const notes = useSelector(state => {
        const { notesReducer } = state;
        return notesReducer.notes;
    });

    const calculateStatistic = () => {
        const statistic = [];
        for (let category of categories) {
            console.log(notes)
            statistic.push({
                icon: category.icon,
                note_category: category.name,
                active: notes.filter(elem => elem.category === category.name).length,
                archived: notes.filter(elem => elem.category === category.name && elem.archive == true).length,
            })
        }

        console.log(statistic)
        return statistic;
    }


    return (
        <div className="bottom-table">
            <table className="table table-summary">
                <colgroup>
                    <col className="first-column" />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <thead className="table-head">
                    <tr>
                        <td></td>
                        <td>Note Category</td>
                        <td>Active</td>
                        <td>Archived</td>
                    </tr>
                </thead>
                <tbody className="table-body" id="statistic">
                    {
                        calculateStatistic().map(
                            category => (
                                <SummaryTableRow key={categories.indexOf(category.note_category)} category={category}></SummaryTableRow>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}


