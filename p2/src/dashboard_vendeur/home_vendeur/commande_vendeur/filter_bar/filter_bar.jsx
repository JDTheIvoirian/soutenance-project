import React from "react";
import '../filter_bar/filter_bar.css';

const FilterBar = () => {
    return (
        <div className="filter-bar">
            <input type="text" placeholder="Search" className="search-bar" />
            <div className="filter-dropdown">
                <select>
                    <option>Period: This Year</option>
                    <option>Last Year</option>
                </select>
                <select>
                    <option>Status: All</option>
                    <option>Active</option>
                    <option>Pending</option>
                    <option>Need Approval</option>
                </select>
                <select>
                    <option>Social Media: All</option>
                    <option>Facebook</option>
                    <option>Instagram</option>
                </select>
            </div>
        </div>
    );
}

export default FilterBar;