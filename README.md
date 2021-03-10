**Activate the virtual environment**
```
source blockchain-env/scripts/activate
```
**Install all packages**
```pip3 install -r requirements.txt
```
**Run the tests**
make sure to activate the virtual environment.

```
python -m pytest backend/tests
```
**Run the applicatio and API**

make sure to activate the VIRTUAL ENVIRONMENT.

```python -m backend.app
```

**run a  peer instance**

```
export PEER=True && python -m backend.app
```

**Run the Frontend**

In the frontend directory:
```
npm run start
```

**Seed the backend with data**

Make sure to activate the virtual environment.

```
export SEED_DATA=True && python -m backend.app
```

```
npm i react-bootstrap --save
```

```
npm i react-router@5.0.1 react-router-dom@5.0.1 history@4.9.0 --save
```
