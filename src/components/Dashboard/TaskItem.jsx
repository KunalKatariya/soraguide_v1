import React from 'react';
import { CheckCircle, Circle, ExternalLink, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './TaskItem.css';

const TaskItem = ({ task, onToggle, onDelete }) => {
    const handleDelete = (e) => {
        e.stopPropagation();
        onDelete(task.id);
    };

    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`} onClick={() => onToggle(task.id)}>
            <div className="task-checkbox">
                {task.completed ? <CheckCircle className="icon-checked" size={22} /> : <Circle className="icon-unchecked" size={22} />}
            </div>
            <div className="task-content">
                <div className="task-header">
                    <span className="task-eyebrow">{task.category}</span>
                    <div className="task-title-row">
                        <h3 className="task-title">{task.title}</h3>
                        {task.guideLink && (
                            <Link
                                to={task.guideLink}
                                className="guide-button"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLink size={14} /> Guide
                            </Link>
                        )}
                    </div>
                </div>
                <p className="task-desc">{task.description}</p>
            </div>
            <button className="delete-btn" onClick={handleDelete} title="Delete Task">
                <Trash2 size={18} />
            </button>
        </div>
    );
};

export default TaskItem;
