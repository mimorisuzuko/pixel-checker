import { useState } from 'react';
import { css } from '@emotion/css';
import { hot } from 'react-hot-loader/root';

const Viewer = ({ min, max, interval }) => {
    try {
        return (
            <div>
                {Array.from(
                    Array(Math.floor((max - min) / interval) + 1),
                    (_, i) => {
                        const v = min + interval * i;

                        return (
                            <div
                                key={`item-${i}`}
                                className={css({
                                    position: 'relative',
                                    paddingLeft: 10,
                                    boxSizing: 'border-box'
                                })}
                            >
                                <div
                                    className={css({
                                        width: v,
                                        height: '100%',
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        background: 'blue'
                                    })}
                                />
                                {v}
                            </div>
                        );
                    }
                )}
            </div>
        );
    } catch (err) {
        return <div>{err.message}</div>;
    }
};

const App = () => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10);
    const [interval, setInterval] = useState(0.1);

    return (
        <div>
            <div
                className={css({
                    padding: 5,
                    borderBottom: '1px solid lightgray',
                    position: 'sticky',
                    top: 0,
                    zIndex: 100,
                    backgroundColor: 'white',
                    input: {
                        marginLeft: 2,
                        marginRight: 4,
                        font: 'inherit',
                        width: 50
                    }
                })}
            >
                <label>
                    最小
                    <input
                        type='number'
                        value={min}
                        onChange={({ currentTarget: { value } }) => {
                            setMin(parseInt(value));
                        }}
                    />
                </label>
                <label>
                    最大
                    <input
                        type='number'
                        value={max}
                        onChange={({ currentTarget: { value } }) => {
                            setMax(parseInt(value));
                        }}
                    />
                </label>
                <label>
                    間隔
                    <input
                        type='number'
                        value={interval}
                        onChange={({ currentTarget: { value } }) => {
                            setInterval(parseFloat(value));
                        }}
                    />
                </label>
            </div>
            <Viewer min={min} max={max} interval={interval} />
        </div>
    );
};

export default hot(App);
